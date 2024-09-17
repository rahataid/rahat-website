// import AboutUs from "@components/about-us";
// import Benefits from "@components/benefits";
import Milestones from "@components/milestones";
// import OurPlatform from "@components/our-platform";
// import ProductFeatures from "@containers/product-features";
import SEO from "@components/seo";
import WeAre from "@components/we-are";
// import HeroArea from "@containers/hero";
// import OurServices from "@components/our-services";
import Footer from "@layout/footer";
import Header from "@layout/header";
import { normalizedData } from "@utils/methods";
import Wrapper from "src/layout/wrapper";

// Demo data
import homepageData from "../data/home.json";
// import VideoArea from "@components/youtube-video";
import OurEcosystem from "@containers/our-ecosystem";
import MainBannerArea from "@containers/homepage-main";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <MainBannerArea />
            {/* <main id="main-content">
                <HeroArea data={content["hero-section"]} />
            </main> */}
            {/* <AboutUs /> */}
            <WeAre />

            {/* <VideoArea data={content["video-section"]} /> */}
            {/* <Benefits /> */}
            {/* <OurPlatform /> */}
            <OurEcosystem />
            <Milestones />
            {/* <ProductFeatures /> */}
            {/* <OurServices /> */}
            <Footer />
        </Wrapper>
    );
};

export default Home;
