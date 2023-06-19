import React from "react";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import AboutUsDetails from "@components/about-us-page";

const AboutUsPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact Us" />
            <Header />
            <AboutUsDetails />
            <Footer />
        </Wrapper>
    );
};

export default AboutUsPage;

