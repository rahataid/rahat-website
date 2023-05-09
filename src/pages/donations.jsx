import Breadcrumb from "@components/breadcrumb";
import SEO from "@components/seo";
import ExploreProductArea from "@containers/explore-product/layout-08";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data
import productData from "../data/donations.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Donations" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Donations" currentPage="Donations" />
            <ExploreProductArea
                data={{
                    products: productData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
