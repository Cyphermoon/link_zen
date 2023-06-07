export const isValidImageSize = (imageSize: number) => {
    const maxSize = 3 * 1024 * 1024; // 3MB in bytes

    return imageSize <= maxSize
}