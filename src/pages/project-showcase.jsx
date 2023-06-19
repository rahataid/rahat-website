import React from "react";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import ProjectShowcasePage from "@components/project-showcase-page";

const ProjectShowcaseDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact Us" />
            <Header />
            <ProjectShowcasePage />
            <Footer />
        </Wrapper>
    );
};

export default ProjectShowcaseDetailPage;

