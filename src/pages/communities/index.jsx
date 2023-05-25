import SEO from "@components/seo";
import ProductArea from "@containers/explore-product/layout-01/community";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo Data
import { getCommunities } from "@redux/slices/communities";
import { wrapper } from "@redux/store";

export default function Product({ communities }) {
    console.log("communities", communities);
    return (
        <Wrapper>
            <SEO pageTitle="Communities" />
            <Header />
            <main id="main-content">
                <ProductArea communities={communities} />
            </main>
            <Footer />
        </Wrapper>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getCommunities());
        const serializedCommunities = store.getState().communities.communities;
        console.log(serializedCommunities);
        const serializedError = store.getState().communities.error;
        return {
            props: {
                communities: serializedCommunities,
                error: serializedError,
            },
        };
    }
);
