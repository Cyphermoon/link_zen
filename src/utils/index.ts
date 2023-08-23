import { errorToast, successToast } from "./toast";

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

export function handleConfirmationOrAction(confirmation: Confirmation | null, handler?: HandlerFunction) {
    if (confirmation?.title) {
        confirmation.dialog?.({
            title: confirmation.title,
            type: "confirm",
            description: confirmation.message,
        }).then((result) => result && handler?.());
    } else {
        handler?.();
    }
}

export const deleteMessage = (linkName?: string, type?: string) => ({
    title: `Delete ${type ? type : "Link"}`,
    message: `Are you sure you want to delete ${linkName ? `<b>${linkName}</b>` : "this link"} ?`,
})

export async function downloadFile(url: string, fileName: string) {
    try {
        const res = await fetch(url)
        const blob = await res.blob()
        const objectUrl = URL.createObjectURL(blob)

        const anchor = document.createElement("a")
        anchor.setAttribute("href", objectUrl)
        anchor.setAttribute("download", fileName)
        anchor.setAttribute("target", "_blank")
        anchor.click()

        URL.revokeObjectURL(objectUrl)
        anchor.remove()
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export function toggleFullScreen(targetElement: Element | null, isFullscreen: boolean,) {
    if (isFullscreen) {
        document.exitFullscreen && document.exitFullscreen();
    } else {
        targetElement && targetElement.requestFullscreen();
    }
}

export function copyTextToClipboard(text: string) {

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                successToast("Copied Successfully")
            })
            .catch(() => {
                errorToast("Copy Failed")
            });
    } else {
        // const element = document.getElementById("copyText") as HTMLInputElement
        // element.setAttribute("value", text)
        // element.focus()
        // element.select()

        // try {
        //     const result = document.execCommand('copy')

        // } catch (error) {
        //     errorToast("Copy Fail")
        // }
        errorToast("Copy Failed")
    }
}


