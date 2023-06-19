import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import AboutUs from "@components/about-us";
import WeAre from "@components/we-are";
import Milestones from "@components/milestones";
import VideoArea from "@components/youtube-video";
import Benefits from "@components/benefits";
import OurPlatform from "@components/our-platform";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-09";
import { normalizedData } from "@utils/methods";

// Demo data
import homepageData from "../data/homepages/home-09.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);

    return (
        <Wrapper>
            <SEO pageTitle="Home Nine" />
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

