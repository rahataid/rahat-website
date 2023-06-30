import AboutUsDetails from "@components/about-us-page";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const AboutUsPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="About Us" />
            <Header />
            <AboutUsDetails />
            <Footer />
        </Wrapper>
    );
};

export default AboutUsPage;

