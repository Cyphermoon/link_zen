import { sendContactMessage } from "@/api/mail";
import Container from "@/components/common/Container";
import { SocialIcon } from "@/components/common/SocialIcon";
import { FormControl, FormikInput, FormikTextarea } from "@/components/forms";
import { inputClass } from "@/components/forms/commonStyles.constant";
import WaitListLayout from "@/components/layout/WaitListLayout";
import { NotificationModal } from "@/components/modals";
import AppConfig from "@/constants/app.constant";
import { Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import * as Yup from "yup";
import Navbar from "../components/HomePage/NavBar/index";
import { Btn } from "../components/common/Button";


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required"),
  message: Yup.string()
    .required("This field is required")
})


const Contact = () => {
  const [notificationModal, setNotificationModal] = useState<"success" | "failed" | "">("")

  const closeNotificationModal = () => {
    setNotificationModal("")
  }

  const handleSubmit = (values: ContactFormFieldProps, helper: FormikHelpers<ContactFormFieldProps>) => {
    helper.resetForm()

    sendContactMessage(values)
      .then(_ => setNotificationModal("success"))
      .catch(err => {
        setNotificationModal("failed")

      })
  }

  return (
    <WaitListLayout>
      <div className="h-screen">
        <div className="bg-accent py-6">
          <Navbar inverse={false} />
        </div>
        <Container className="py-12">
          <h2 className="text-accent font-bold text-center">Contact Us</h2>

          <div className="flex flex-col-reverse lg:flex-row justify-center md:my-8 space-y-12 lg:space-y-0 px-3 lg:px-0">
            <div className="w-full lg:w-1/4 xl:1/5 bg-accent px-4 py-6 lg:p-6 flex flex-col rounded-lg lg:rounded-none">
              <h5 className="text-primary font-normal text-4xl hidden lg:block">
                We would love to hear from you
              </h5>
              <div className="mt-auto">
                <h5 className="text-xl text-primary-50 pb-6 lg:py-4">
                  Social Contacts
                </h5>
                <div className="flex space-x-6">
                  <SocialIcon
                    Icon={FaTwitter}
                    href={`${AppConfig.twitterUrl}`}
                    className="text-primary hover:text-primary-300 "
                    title="Twitter"
                  />
                  <SocialIcon
                    Icon={FaLinkedin}
                    href={`${AppConfig.linkedinUrl}`}
                    className="text-primary hover:text-primary-300 "
                    title="Linkedin"
                  />
                </div>
              </div>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                message: ""
              }}
              validationSchema={ContactFormSchema}
              onSubmit={handleSubmit} >
              {
                (formik) => (
                  <form className="w-full lg:w-1/2 lg:px-8 py-6 lg:shadow-md" onSubmit={formik.handleSubmit}>
                    <FormControl label="Name" labelId="name">
                      <FormikInput id="name" type="text" name="name" />
                    </FormControl>

                    <FormControl label="Email" labelId="email">
                      <FormikInput id="email" type="email" name="email" />
                    </FormControl>

                    <FormControl label="Message" labelId="message">
                      <FormikTextarea id='message' name='message' className={`${inputClass}`} rows={6} />
                    </FormControl>

                    <Btn
                      type={"submit"}
                      className={
                        `bg-accent text-white text-md rounded-lg w-full p-4 my-10 
                          ${formik.isSubmitting ? "pointer-events-none opacity-50" : ""}`
                      }
                      label={formik.isSubmitting ? "" : "Send"}
                      disabled={formik.isSubmitting}
                    />
                  </form>
                )
              }
            </Formik>
          </div>
        </Container>

        {/* modals */}
        <NotificationModal
          title="Message Sent"
          description="we will get back to you shortly"
          illustration="/asset/successful.gif"
          state={notificationModal === "success"}
          closeModal={closeNotificationModal} />

        <NotificationModal
          title="An Error occurred"
          description="Please try again, If the issue persist please contact us via our social media"
          illustration="/asset/failed.gif"
          state={notificationModal === "failed"}
          closeModal={closeNotificationModal} />
      </div >
    </WaitListLayout >
  );
};

export default Contact;

