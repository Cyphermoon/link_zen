import Container from "../common/Container"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterLink } from "./FooterLink";
import { SocialIcon } from "../common/SocialIcon";
import AppConfig from "@/constants/app.constant";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="bg-accent py-5">
      <Container className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0">
        <div className="space-y-2">
          <Logo className="text-primary text-xl lg:text-2xl font-medium lg:font-bold" />

          <div className="flex space-x-2 justify-center lg:justify-start">
            <SocialIcon Icon={FaTwitter} title="Twitter" className="text-primary hover:text-primary-300 " href="#" />
            <SocialIcon Icon={FaLinkedin} title="Linkedin" className="text-primary hover:text-primary-300 " href="#" />
          </div>
        </div>

        <p className="text-accent-100 text-sm lg:self-end order-3 lg:order-2">
          COPYRIGHT &#169; 2023 - CREATED BY KELVIN AND SEUN
        </p>

        <ul className="order-2 lg:order-3 text-center lg:text-left">
          <li><FooterLink title="Terms of services" href={AppConfig.termsOfservices} /></li>
          <li><FooterLink title="Privacy" href={AppConfig.privacy} /></li>
        </ul>
      </Container>
    </footer>
  );
}


export default Footer