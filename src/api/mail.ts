import axios from "axios"
import { mailClient } from "./config"


export const createContact = async (data: CreateContactRequestProps) => { 
    const response = await mailClient.post("/v3/contacts", data)
    return response.data

    // return Promise.resolve("resolved")
 }

 export const sendContactMessage = async (values: ContactFormFieldProps) => {

//     const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//     const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//     const user_id = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

//     if(!service_id || !template_id || !user_id){
//         throw new Error("Error occurred because request parameters could not be found")
//     }

//     const emailData:ContactFormRequestProps ={ 
//         service_id, 
//         template_id,
//         user_id,
//         template_params: {
//             client_email: values.email,
//             client_message: values.message,
//             client_name: values.name
//         }
//          }

//    const res = await axios.post(" https://api.emailjs.com/api/v1.0/email/send", emailData)

//    return res.data

return Promise.resolve("solved")

 }