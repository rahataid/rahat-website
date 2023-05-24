import SEO from "@components/seo";
import CommunityDetails from "@containers/community-details";
import CommunityIntro from "@containers/community-details/communityIntro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { wrapper } from "@redux/store";

// Demo data
import authorData from "../data/community.json";
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <CommunityIntro data={authorData} />
            <CommunityDetails data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

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
export default Author;
