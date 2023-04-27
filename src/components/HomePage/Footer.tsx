import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { SocialIcon } from "../common/SocialIcon";
import { FooterLink } from "./FooterLink";
import AppConfig from "@/constants/app.constant";

const Footer = () => {
  return (
    <footer className="bg-accent py-5">
      <Container className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0">
        <div className="space-y-2">
          <Logo className="text-primary text-xl lg:text-2xl font-medium lg:font-bold" />

          <div className="flex space-x-2 justify-center lg:justify-start">
            <SocialIcon
              Icon={FaTwitter}
              title="Twitter"
              href={AppConfig.twitterUrl}
              className="text-primary hover:text-primary-300 " />

            <SocialIcon
              Icon={FaLinkedin}
              title="Linkedin"
              href={AppConfig.linkedinUrl}
              className="text-primary hover:text-primary-300 " />
          </div>
        </div>

        <p className="text-accent-100 text-sm lg:self-end order-3 lg:order-2">
          COPYRIGHT &#169; 2023 - CREATED BY KELVIN AND SEUN
        </p>

        <ul className="order-2 lg:order-3 text-center lg:text-left">
          <li><FooterLink title="Terms of services" href={"/terms-of-services"} /></li>
          <li><FooterLink title="Privacy" href={"/privacy"} /></li>
        </ul>
      </Container>
    </footer>
  );
}


export default Footer