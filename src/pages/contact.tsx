import Container from "@/components/common/Container";
import clsx from "clsx";
import { SocialIcon } from "@/components/HomePage/SocialIcon";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Btn } from "../components/common/Button";
import Navbar from "../components/HomePage/NavBar/index";

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
}

const inputClass = clsx(
  "bg-primary text-base text-primary-700 py-4 px-3 rounded-lg outline-none focus:ring-1 focus:ring-primary-500"
);

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

const Input = ({ type, id, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder ? placeholder : ""}
      id={id}
      required
      className={inputClass}
    />
  );
};

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="bg-accent py-6">
        <div className="">
          <Navbar inverse={false} />
        </div>
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
                <SocialIcon Icon={FaTwitter} title="Twitter" />
                <SocialIcon Icon={FaLinkedin} title="Linkedin" />
              </div>
            </div>
          </div>
          <form className="w-full lg:w-1/2 lg:px-8 py-6 lg:shadow-md">
            <div>
              <FormControl label="Name" labelId="name">
                <Input id="name" type="text" className="py-12" />
              </FormControl>
              <FormControl label="Email" labelId="email">
                <Input id="email" type="email" />
              </FormControl>
              <FormControl label="Message" labelId="message">
                <textarea
                  rows={6}
                  id="message"
                  className={`resize-none ${inputClass}`}
                ></textarea>
              </FormControl>
              <Btn
                className="bg-accent text-white text-md rounded-lg w-full p-4 my-10"
                label="Send"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
