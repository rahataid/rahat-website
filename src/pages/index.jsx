import AboutUs from "@components/about-us";
import Milestones from "@components/milestones";
import SEO from "@components/seo";
import WeAre from "@components/we-are";
import HeroArea from "@containers/hero/layout-09";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import { normalizedData } from "@utils/methods";
import Wrapper from "src/layout/wrapper";

// Demo data
import homepageData from "../data/homepages/home-09.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home09 = () => {
    const content = normalizedData(homepageData?.content || []);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
            </main>
            <AboutUs />
            <WeAre />
            <Milestones />
            <Footer />
        </Wrapper>
    );
};

export default Home09;
