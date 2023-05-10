import SEO from "@components/seo";
import HeroArea from "@containers/hero/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import ServiceArea from "@containers/services/layout-01";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { normalizedData } from "@utils/methods";

// Demo Data
import {
    getCommunities,
    useGetCommunitiesQuery,
} from "@redux/slices/communities";
import { wrapper } from "@redux/store";
import { communityApi } from "@services/communities";
import homepageData from "../data/homepages/home-01.json";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const pokemon = context.params?.pokemon;
        store.dispatch(getCommunities(pokemon));

        await Promise.all(
            store.dispatch(communityApi.util.getRunningQueriesThunk())
        );

        return {
            props: {},
        };
    }
);

const Home = ({ ...props }) => {
    const content = normalizedData(homepageData?.content || []);

    const { data, isLoading } = useGetCommunitiesQuery("pikachu");
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />

                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: [],
                    }}
                />
                <ServiceArea data={content["service-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
