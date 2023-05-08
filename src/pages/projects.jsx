import Breadcrumb from "@components/breadcrumb";
import SEO from "@components/seo";
import CollectionArea from "@containers/collection/layout-03";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// demo data
import collectionsData from "../data/collections.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Collection = () => (
    <Wrapper>
        <SEO pageTitle="Projects" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Projects" currentPage="projects" />
            <CollectionArea data={{ collections: collectionsData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Collection;
