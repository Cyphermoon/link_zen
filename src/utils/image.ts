export const convertImageToFileURL = (file: File | null) => {
    if(file) return URL.createObjectURL(file);
    return ""
}
  

  export const isValidImageSize = (imageSize: number) => {
    // checks if an image us under the required size

    const maxSize = 3 * 1024 * 1024; // 3MB in bytes

    return imageSize <= maxSize
}