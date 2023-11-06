export interface CreateContactRequestProps {
    email: string,
    updateEnabled: boolean,
    listIds: number[]
    attributes:{
        FIRSTNAME: string
    }
}

export interface ContactFormRequestProps {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params: {
      client_name: string;
      client_email: string;
      client_message: string
    };
  }
  