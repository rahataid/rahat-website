import ProjectShowcasePage from "@components/project-showcase-page";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const ProjectShowcaseDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Project Showcase" />
            <Header />
            <ProjectShowcasePage />
            <Footer />
        </Wrapper>
    );
};

export default ProjectShowcaseDetailPage;
