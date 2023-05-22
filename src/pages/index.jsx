import SEO from "@components/seo";
import HeroArea from "@containers/hero/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import ServiceArea from "@containers/services/layout-01";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { normalizedData } from "@utils/methods";

// Demo Data

import { wrapper } from "@redux/store";
import homepageData from "../data/homepages/home-01.json";
import productData from "../data/products.json";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        return {
            props: {
                className: "template-color-1",
            },
        };
    }
);

const Home = ({ ...props }) => {
    const content = normalizedData(homepageData?.content || []);

    const newestData = productData
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 5);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />

                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                    }}
                />
                <ServiceArea data={content["service-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
