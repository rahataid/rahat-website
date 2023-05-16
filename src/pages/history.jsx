import SEO from "@components/seo";
import UpcomingProjectsArea from "@containers/upcoming-projects";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo Data
import upcomingData from "../data/upcoming-projects.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const UpcomingProjects = () => (
    <Wrapper>
        <SEO pageTitle="Upcoming Projects" />
        <Header />
        <main id="main-content">
            <UpcomingProjectsArea data={{ upcomingProjects: upcomingData }} />
        </main>
        <Footer space={2} />
    </Wrapper>
);

export default UpcomingProjects;
