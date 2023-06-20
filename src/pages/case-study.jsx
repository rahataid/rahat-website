import CaseStudyPage from "@components/case-study-page";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const ContactFormPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact Us" />
            <Header />
            <CaseStudyPage />
            <Footer />
        </Wrapper>
    );
};

export default ContactFormPage;
