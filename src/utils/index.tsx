
export const truncateText = (text: string, maxLength: number, omission = '...'): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength - omission.length)}${omission}`;
};


export function generatePageNumbers(pageCount: number, range: number, currentPage: number) {
    const pageNumbers = []

    // make sure the currentPage - range is enough to add 1 or "..."
    if (currentPage - range > 1) {
        pageNumbers.push(1)
        if (currentPage - range > 2) {
            pageNumbers.push("...")
        }
    }

    for (let i = Math.max(1, currentPage - range); i <= Math.min(pageCount, currentPage + range); i++) {
        pageNumbers.push(i)
    }

    // make sure the currentPage + range is enough to add "..." or 1
    if (currentPage + range < pageCount) {
        if (currentPage + range < pageCount - 1) {
            pageNumbers.push("...")
        }

        pageNumbers.push(pageCount)
    }

    return pageNumbers
}

