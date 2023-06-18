import SEO from "@components/seo";
import CommunityDetails from "@containers/community/details";
import CommunityIntro from "@containers/community/details/community-intro";
import Footer from "@layout/footer";
import Header from "@layout/header";
import { getCommunityDetails } from "@redux/slices/community";
import { wrapper } from "@redux/store";
import Wrapper from "src/layout/wrapper";

const Author = ({ community, id }) => (
    <Wrapper>
        <SEO
            pageTitle={community?.name}
            description={community?.description}
            imageUrl={community?.images?.logo}
        />
        <Header />
        <main id="main-content">
            <CommunityIntro community={community} />
            <CommunityDetails community={community} />
        </main>
        <Footer />
    </Wrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getCommunityDetails(query?.address));
            const community = store.getState().community.community;
            const serializedError = store.getState().community.error;
            return {
                props: {
                    community,
                    error: serializedError,
                },
            };
        }
);
export default Author;
