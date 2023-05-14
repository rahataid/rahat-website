import SEO from "@components/seo";
import ImpactList from "@containers/impactList";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo Data
import activityData from "../data/activity.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => (
    <Wrapper>
        <SEO pageTitle="Acivity" />
        <Header />
        <main id="main-content">
            <ImpactList data={{ activities: activityData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
