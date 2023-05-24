import SEO from "@components/seo";
import CommunityDetails from "@containers/community-details";
import CommunityIntro from "@containers/community-details/communityIntro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { getCommunities } from "@redux/slices/communities";
import { wrapper } from "@redux/store";

// Demo data

const Author = ({ community }) => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <CommunityIntro community={community} />
            <CommunityDetails community={community} />
        </main>
        <Footer />
    </Wrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getCommunities());
        const serializedCommunities = store.getState().community.communities;
        console.log(serializedCommunities);
        const serializedError = store.getState().community.error;
        return {
            props: {
                communities: serializedCommunities,
                error: serializedError,
                className: "template-color-1"
            },
        };
    }
);
export default Author;
