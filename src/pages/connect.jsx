import SEO from "@components/seo";
import ConnectArea from "@containers/connect";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "src/layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Connect = () => (
    <Wrapper>
        <SEO pageTitle="Connect" />
        <Header />
        <main id="main-content">
            <ConnectArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Connect;
