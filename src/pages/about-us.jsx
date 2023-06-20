import React from "react";
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
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

