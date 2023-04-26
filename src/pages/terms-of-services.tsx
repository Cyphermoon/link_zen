import Container from "@/components/common/Container";
import Navbar from "../components/HomePage/NavBar/index";
import WaitListLayout from "@/components/layout/WaitListLayout";
import Footer from "@/components/HomePage/Footer";
import AppConfig from "@/constants/app.constant";
import Link from "next/link";

const TermsOfServices = () => {
  return (
    <WaitListLayout>
      <div>
        <div className="bg-accent py-6">
          <Navbar inverse={false} />
        </div>

        <Container>
          <div className="my-10 lg:my-20">
            <h1 className="font-900 font-roboto text-4xl lg:text-6xl my-4">
              Terms of Services
            </h1>

            <p className="font-poppins font-normal">
              The purpose of these terms of service is to outline the rules and
              guidelines that govern the use of the LinkZen platform, as well as
              to protect the interests of both LinkZen and its users. These
              terms define the rights and responsibilities of users, set out
              limitations on liability, and establish procedures for dispute
              resolution. By accessing or using LinkZen, users agree to abide by
              these terms of service.
            </p>
          </div>

          <div className="my-8 md:my-12">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              User Obligations
            </h5>
            <p className="font-poppins font-normal">
              As a user of LinkZen, you are responsible for ensuring that your
              use of the platform complies with these terms of service, as well
              as with any applicable laws and regulations. This includes
              refraining from engaging in any activity that may damage the
              platform or interfere with its proper functioning. Users are also
              obligated to provide accurate and complete information when
              creating an account, and to maintain the security of their account
              credentials. Additionally, users must respect the intellectual
              property rights of others and not use the platform to engage in
              any illegal, fraudulent, or abusive behavior.
            </p>
          </div>

          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Account Creation and Security
            </h5>
            <p className="font-poppins font-normal">
              As a user of LinkZen, you are responsible for ensuring that your
              use of the platform complies with these terms of service, as well
              as with any applicable laws and regulations. This includes
              refraining from engaging in any activity that may damage the
              platform or interfere with its proper functioning. Users are also
              obligated to provide accurate and complete information when
              creating an account, and to maintain the security of their account
              credentials. Additionally, users must respect the intellectual
              property rights of others and not use the platform to engage in
              any illegal, fraudulent, or abusive behavior.
            </p>
          </div>

          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Privacy Policy
            </h5>
            <p className="font-poppins font-normal">
              At LinkZen, we take your privacy seriously. We understand the
              importance of keeping your personal information safe and secure.
              Our privacy policy outlines the information we collect from you
              and how we use, share, and protect that information. By using
              LinkZen, you agree to our privacy policy. You can find our full
              privacy policy{""}
              <Link
                href={AppConfig.privacy}
                className="text-md font-normal underline color-accent mx-2"
              >
              Here
              </Link>{" "}
              .
            </p>
          </div>

          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Intellectual Property
            </h5>
            <p className="font-poppins font-normal">
              All content and materials provided on LinkZen, including but not
              limited to the website, mobile application, logos, images, and
              text, are the intellectual property of LinkZen and are protected
              by copyright, trademark, and other intellectual property laws.
              Users are not permitted to reproduce, distribute, display, or sell
              any content or materials provided on LinkZen without the prior
              written consent of LinkZen. Users also agree not to use any
              content or materials provided on LinkZen for any commercial
              purposes without the prior written consent of LinkZen.
            </p>
          </div>
          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Termination and Suspension
            </h5>
            <p className="font-poppins font-normal">
              We reserve the right to terminate or suspend your account or
              access to LinkZen at any time and without notice, for any reason,
              including, but not limited to, a breach of these Terms of Service
              or for conduct that we believe is harmful to our users, our
              business, or others. We also reserve the right to discontinue any
              aspect of LinkZen at any time, without liability to you or any
              third party. If we terminate or suspend your account, you must
              immediately cease using LinkZen and may not create a new account
              without our prior written consent.
            </p>
          </div>

          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Dispute resolution and governing law
            </h5>
            <p className="font-poppins font-normal">
              Any dispute, controversy, or claim arising out of or relating to
              the use of LinkZen or the interpretation, performance, breach,
              termination, or validity of these terms of service shall be
              resolved through arbitration in accordance with the rules of the
              Nigerian Arbitration Association. The arbitration shall be
              conducted in English, in a mutually agreed location, and the
              decision rendered by the arbitrator shall be final and binding.
              These terms of service shall be governed by and construed in
              accordance with the laws of the state, without regard to its
              conflict of laws provisions.
            </p>
          </div>
          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Limitation of Liability
            </h5>
            <p className="font-poppins font-normal">
              LinkZen will not be liable for any direct, indirect, incidental,
              special, consequential or exemplary damages, including but not
              limited to, damages for loss of profits, goodwill, use, data or
              other intangible losses resulting from the use or inability to use
              our service. You agree to indemnify and hold harmless LinkZen and
              its affiliates, officers, agents, employees, and partners from any
              claim or demand, including reasonable attorneys' fees, made by any
              third party due to or arising out of your use of the service, your
              violation of these Terms of Service, or your violation of any
              rights of another.{" "}
            </p>
          </div>

          <div className="my-8 md:my-10">
            <h5 className="font-semibold font-poppins text-2xl lg:text-3xl my-2">
              Changes to the Terms of Service
            </h5>
            <p className="font-poppins font-normal">
              We reserve the right to modify or update these Terms of Service
              from time to time. You are responsible for reviewing these changes
              and continuing to use LinkZen after such modifications have been
              made constitutes your acceptance of the updated Terms of Service.
              If you do not agree with the changes, you should discontinue using
              our service.
            </p>
          </div>
        </Container>
        <Footer />
      </div>
    </WaitListLayout>
  );
};

export default TermsOfServices;
