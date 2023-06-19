import React from "react";
import ContactForm from "@components/contact-form";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";

const ContactFormPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact Us" />
            <Header />
            <ContactForm />
            <Footer />
        </Wrapper>
    );
};

export default ContactFormPage;

