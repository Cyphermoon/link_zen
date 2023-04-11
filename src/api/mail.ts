import { mailClient } from "./config"


export const createContact = async (data: CreateContactRequestProps) => { 
    // const response = await mailClient.post("/v3/contacts", data)
    // return response.data

    return Promise.resolve("resolved")
 }