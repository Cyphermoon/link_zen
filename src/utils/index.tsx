
export const truncateText = (text: string, maxLength: number, omission = '...'): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength - omission.length)}${omission}`;
};
