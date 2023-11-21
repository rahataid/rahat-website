import SEO from "@components/seo";
import CareerContainer from "@containers/career";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import React from "react";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Career" />
            <Header />
            <main id="main-content" className=" p-2">
                <CareerContainer />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default index;

