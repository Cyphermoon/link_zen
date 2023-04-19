import Container from "../common/Container"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterLink } from "./FooterLink";
import { SocialIcon } from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-accent py-5">
      <Container className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0">
        <div className="space-y-2">
          <h4 className="text-primary font-bold">ORGANICE</h4>

          <div className="flex space-x-2 justify-center lg:justify-start">
            <SocialIcon Icon={FaTwitter} title="Twitter" />
            <SocialIcon Icon={FaLinkedin} title="Linkedin" />
          </div>
        </div>

        <p className="text-accent-100 text-sm lg:self-end order-3 lg:order-2">
          COPYRIGHT &#169; 2023 - CREATED BY KELVIN AND SEUN
        </p>

        <ul className="order-2 lg:order-3 text-center lg:text-left">
          <li><FooterLink title="Terms of services" href="#" /></li>
          <li><FooterLink title="Privacy" href="#" /></li>
        </ul>
      </Container>
    </footer>
  );
}


export default Footer