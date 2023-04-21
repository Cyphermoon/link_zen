import * as Dialog from '@radix-ui/react-dialog';
import { sendContactMessage } from "@/api/mail";
import Container from "@/components/common/Container";
import { SocialIcon } from "@/components/common/SocialIcon";
import WaitListLayout from "@/components/layout/WaitListLayout";
import AppConfig from "@/constants/app.constant";
import clsx from "clsx";
import { Formik, useField } from "formik";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "../components/HomePage/NavBar/index";
import { Btn } from "../components/common/Button";
import SuccessGif from "../components/Contact/successful.gif"
import Image from 'next/image';
import { useBoolean } from 'usehooks-ts';

interface FormControlProps {
  label: string;
  labelId: string;
  children: React.ReactNode;
}

interface InputProps {
  type?: string;
  placeholder?: string;
  id: string;
  className?: string;
  name: string
}

interface ModalProps {
  state: boolean
  closeModal: () => void
}

const inputClass = clsx(
  `bg-primary text-base text-primary-700 py-4 px-3 rounded-lg outline-none focus:ring-1 focus:ring-primary-500`
);

const SuccessModal = ({ state, closeModal }: ModalProps) => {
  return (
    <Dialog.Root open={state}>
      <Dialog.DialogPortal>
        <Dialog.Overlay
          onClick={() => closeModal()}
          className='bg-primary-600 rdx-state-open:animate-in rdx-state-open:fade-in-0 duration-500 fixed inset-0' />
        <Dialog.Content
          className='bg-white text-primary-800 w-11/12 max-w-sm rounded-xl fixed top-[50%] left-[50%]  translate-x-[-50%] 
          translate-y-[-50%] text-center flex flex-col items-center py-3'>
          <Dialog.Title className='text-2xl font-medium'>Message Sent</Dialog.Title>

          <Image src={SuccessGif} className='h-40 w-auto' alt='success illustration' />

          <p className='text-sm font-normal'>we will get back to you shortly</p>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  )
}

const Contact = () => {
  const { value, setFalse, setTrue } = useBoolean(false)

  const handleSubmit = (values: ContactFormFieldProps) => {
    sendContactMessage(values)
      .then(res => setTrue())
      .catch(err => console.error(err.response ? err.response : err))
  }

  return (
    <WaitListLayout>
      <SuccessModal state={value} closeModal={setFalse} />
      <div className="h-screen">
        <div className="bg-accent py-6">
          <>
            <Navbar inverse={false} />
          </>
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
              onSubmit={(values) => handleSubmit(values)} >
              {
                (formik) => (
                  <form className="w-full lg:w-1/2 lg:px-8 py-6 lg:shadow-md" onSubmit={formik.handleSubmit}>
                    <FormControl label="Name" labelId="name">
                      <Input id="name" type="text" name="name" />
                    </FormControl>

                    <FormControl label="Email" labelId="email">
                      <Input id="email" type="email" name="email" />
                    </FormControl>

                    <FormControl label="Message" labelId="message">
                      <textarea
                        rows={6}
                        id="message"
                        required
                        className={`resize-none ${inputClass}`}
                        {...formik.getFieldProps("message")}
                      />
                    </FormControl>

                    <Btn
                      type={"submit"}
                      className="bg-accent text-white text-md rounded-lg w-full p-4 my-10"
                      label="Send"
                    />
                  </form>
                )
              }
            </Formik>
          </div>
        </Container>
      </div >
    </WaitListLayout >
  );
};

export default Contact;



const FormControl = ({ label, labelId, children }: FormControlProps) => {
  return (
    <div className="space-y-3 flex flex-col">
      <label
        className="text-lg font-bold text-primary-800 capitalize mt-4 md:mt-6"
        htmlFor={labelId}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

const Input = ({ type = "string", placeholder, name, className, ...props }: InputProps) => {

  const [field, meta] = useField({
    name,
    type
  })


  return (
    <>
      <input
        type={type}
        placeholder={placeholder ? placeholder : ""}
        required
        className={`${inputClass} ${className}`}
        {...props}
        {...field} />
    </>

  );
};

