import AboutUs from "@components/about-us";
import Benefits from "@components/benefits";
import Milestones from "@components/milestones";
import OurPlatform from "@components/our-platform";
import SEO from "@components/seo";
import WeAre from "@components/we-are";
import VideoArea from "@components/youtube-video";
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

const Home = () => {
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
            <VideoArea data={content["video-section"]} />
            <Benefits />
            <OurPlatform />
            <Footer />
        </Wrapper>
    );
};

export default Home;
