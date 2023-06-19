import React from "react";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import CaseStudyPage from "@components/case-study-page";

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

