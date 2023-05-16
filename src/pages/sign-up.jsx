import SEO from "@components/seo";
import CreateNewArea from "@containers/create-new";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => (
    <Wrapper>
        <SEO pageTitle="Sign Up" />
        <Header />
        <main id="main-content">
            <CreateNewArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
