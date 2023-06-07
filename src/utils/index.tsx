export const isValidImageSize = (imageSize: number) => {
    // checks if an image us under the required size

    const maxSize = 3 * 1024 * 1024; // 3MB in bytes

    return imageSize <= maxSize
}

export const truncateText = (text: string, maxLength: number, omission = '...'): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength - omission.length)}${omission}`;
};
