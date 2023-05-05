import Container from "@/components/common/Container";
import Navbar from "../components/HomePage/NavBar/index";
import WaitListLayout from "@/components/layout/WaitListLayout";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";

const Policy = () => {
  return (
    <WaitListLayout>
      <div>
        <div className="bg-accent py-6">
          <Navbar inverse={false} />
        </div>

        <Container>
          <div className="my-10 lg:my-20">
            <h1 className="font-900 font-roboto text-4xl lg:text-6xl my-4">
              Policy
            </h1>

            <p className="font-poppins font-normal">
              Welcome to LinkZen! We respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and share your personal information when you
              use our services. Please read this policy carefully to understand
              our practices and how we safeguard your personal data. By using
              LinkZen, you consent to the practices outlined in this Privacy
              Policy. If you do not agree with this policy, please do not use
              our services.
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Personal Information
            </h5>
            <p className="font-poppins font-normal">
              At LinkZen, we take your privacy seriously. We only collect the
              personal information necessary to provide our services, such as
              your email address and name. We never sell or share your personal
              information with third parties. Your information is securely
              stored and only accessible to authorized personnel who need it to
              perform their job {'duties."'} Of course, you should customize this
              note to reflect your specific data collection practices and
              policies
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              How we use your personal information
            </h5>
            <p className="font-poppins font-normal">
              We use the personal information we collect from you for a variety
              of purposes, including but not limited to: providing you with the
              products or services you have requested; improving our products
              and services; customizing your experience with our products and
              services; communicating with you about your account; marketing and
              advertising our products and services to you; and complying with
              legal and regulatory requirements.
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              How the personal information is protected
            </h5>
            <p className="font-poppins font-normal">
              At LinkZen, we understand the importance of protecting your
              personal information. We take appropriate measures to safeguard
              your information from unauthorized access, alteration, disclosure,
              or destruction. We use a combination of technical, administrative,
              and physical security measures to ensure the confidentiality and
              integrity of your personal data. These measures include
              encryption, firewalls, access controls, and regular security
              audits. Additionally, we restrict access to your personal
              information to only those who need it to perform their duties.
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              How personal information is shared
            </h5>
            <p className="font-poppins font-normal">
              At LinkZen, we understand the importance of privacy and protecting
              your personal information. We do not sell, rent, or trade your
              personal information to third parties without your explicit
              consent. However, we may share your personal information with our
              trusted partners and service providers who work on our behalf to
              provide you with our services. These partners and service
              providers are required to comply with our privacy policy and keep
              your personal information confidential. We may also disclose your
              personal information if required by law or to protect the safety
              of our users and the public. By using our services, you
              acknowledge and agree to the sharing of your personal information
              as described in this privacy policy.
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              User&apos;s rights
            </h5>
            <p className="font-poppins font-normal">
              Users have certain rights regarding their personal information.
              These include the right to access and receive a copy of their
              personal information, the right to request correction or deletion
              of their personal information, and the right to restrict or object
              to the processing of their personal information. Users can
              exercise these rights by contacting us through the contact
              information provided in the Privacy Policy. We will respond to
              such requests in accordance with applicable data protection laws.
            </p>

            <div className="my-8 md:my-12">
              <p className="font-poppins font-semibold">
                If you have any questions or concerns regarding our Privacy
                Policy, please contact us on our{" "}
                <Link
                  href="/contact"
                  className="text-md font-normal underline color-accent mx-2"
                >
                  contact page
                </Link>{" "}
                We will make every effort to resolve your concerns.
              </p>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </WaitListLayout>
  );
};

export default Policy;
