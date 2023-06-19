import React from "react";
import PlatformDetails from "@components/platform-detail-page";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";

const PlatformDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact Us" />
            <Header />
            <PlatformDetails />
            <Footer />
        </Wrapper>
    );
};

export default PlatformDetailPage;

