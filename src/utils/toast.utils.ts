import { toast } from "react-toastify"

export const errorToast = (message: string) => {
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
