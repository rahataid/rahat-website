import React from "react";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import Header from "@layout/header";
import SEO from "@components/seo";
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

