import React from "react";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import Header from "@layout/header";
import SEO from "@components/seo";
import ProjectsMainPage from "@components/projects-page";

const ProjectDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Our Projects" />
            <Header />
            <ProjectsMainPage />
            <Footer />
        </Wrapper>
    );
};

export default ProjectDetailPage;

