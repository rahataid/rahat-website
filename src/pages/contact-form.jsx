import React from "react";
import ContactForm from "@components/contact-form";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import Header from "@layout/header";
import SEO from "@components/seo";

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

