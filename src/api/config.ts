import axios from "axios";


export const mailClient = axios.create({
    baseURL: "https://api.sendinblue.com/",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "api-key": process.env["NEXT_PUBLIC_EMAIL_API_KEY"]
    }
})

