import { toast, ToastOptions } from "react-toastify"

export function errorToast(message: string){
    return toast.error(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    })
}

export function successToast(message: string, options?:ToastOptions){
    return toast.success(message, {
        position: "bottom-center",
        autoClose: options?.autoClose || 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}
