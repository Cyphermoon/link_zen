import Footer from "@/components/HomePage/Footer";
import NavBar from "@/components/HomePage/NavBar";
import Container from "@/components/common/Container";
import WaitListWrapper from "@/components/layout/WaitListWrapper";
import RootLayout from "@/components/layout/RootLayout";
import AppConfig from "@/constants/app.constant";


const About = () => {
  return (
    <RootLayout metadata={{
      title: `${AppConfig.name} - About`
    }}>
      <WaitListWrapper>
        <div className="bg-accent py-4">
          <NavBar inverse={false} />
          <Container className="my-5 md:my-12 flex flex-col items-center text-center text-primary">
            <h5 className="font-semibold text-4xl lg:text-6xl my-8 lg:w-7/12">
              We make working with links very easy
            </h5>
            <p className="lg:w-1/2 font-poppins">
              Welcome to LinkZen, the web app that provides you with a seamless
              way to store and organize your links. With LinkZen, you can
              organize and manage your online presence by creating a profile
              with clickable links to all your resources, be it social media
              accounts, websites, favorite music playlist and lot more.{" "}
              {"That's"} not all! We will provide you with a professional
              dashboard to make managing your links much much organized!
            </p>
          </Container>
        </div>
        <div className="my-12 md:my-24">
          <Container>
            <div className="my-16 md:my-20">
              <h5 className="font-semibold text-4xl text-accent">Story</h5>
              <p className="text-subdue my-6 font-poppins">
                Our journey started with a simple problem: the hassle of
                constantly bookmarking frequently accessed links and keeping
                links to important resources in note apps. We quickly realized
                that there was a larger problem at hand - the need for a
                platform that could help people manage and organize their
                digital resources as well as their online presence. <br />
                <br />
                LinkZen is a simple solution to a common problem faced by
                individuals and businesses. With so many different platforms to
                promote oneself or {"one's"} business, it can be difficult to
                keep track of them all.
                <br />
                <br />
                LinkZen provides a single, customizable profile dashboard that
                enables users to store any type of link, shorten links url to
                make it look even more nicer, make links private or public, add
                tags or categories, search for other public useful links and
                easily organize their social media accounts.
              </p>
            </div>
            <div className="my-16 md:my-20 font-poppins">
              <h5 className="font-semibold text-4xl text-accent">Vision</h5>
              <p className="text-subdue my-6">
                Our vision is to create a centralized hub for digital resources,
                where users can access their content in a fast and organized
                manner. We believe that by streamlining the process of sharing and
                discovering content, we can empower digital creators, business
                owners and help them build a sustainable online presence.
                <br />
                <br />
                Individuals who wants to use it personally are not excluded too,
                you can add links and make them private for your use only.{" "}
                {"We're"} not stopping here - we have big plans for the future,
                including adding monetization features and creating new tools
                for digital or affiliate marketers.
                <br />
                <br />
                We believe that LinkZen has the potential to change the way
                people interact with digital content, and {"we're"} excited to
                be at the forefront of this movement.
              </p>
            </div>
          </Container>
        </div>
        <Footer />
      </WaitListWrapper>
    </RootLayout>
  );
};

export default About;
