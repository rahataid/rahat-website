import SEO from "@components/seo";
import HeroArea from "@containers/hero";
import Footer from "@layout/footer";
import Header from "@layout/header";
import { normalizedData } from "@utils/methods";
import Wrapper from "src/layout/wrapper";

// Demo data
import homepageData from "../data/home.json";
import OurRecognitions from "@containers/recognition";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);

    console.log("content", content);
    return (
        <Wrapper>
            <SEO pageTitle="Recognitions" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
            </main>
            <OurRecognitions />
            <Footer />
        </Wrapper>
    );
};

export default Home;

