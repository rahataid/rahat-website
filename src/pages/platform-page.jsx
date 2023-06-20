import React from "react";
import PlatformDetails from "@components/platform-detail-page";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import Header from "@layout/header";
import SEO from "@components/seo";

const PlatformDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Platform Page" />
            <Header />
            <PlatformDetails />
            <Footer />
        </Wrapper>
    );
};

export default PlatformDetailPage;

