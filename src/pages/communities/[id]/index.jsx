import SEO from "@components/seo";
import CommunityDetails from "@containers/community-details";
import CommunityIntro from "@containers/community-details/communityIntro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import {
    getCommunityDetails,
    getCommunityProjects,
} from "@redux/slices/community";
import { wrapper } from "@redux/store";

const Author = ({ community, id, projects }) => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <CommunityIntro community={community} />
            <CommunityDetails
                community={community}
                id={id}
                projects={projects}
            />
        </main>
        <Footer />
    </Wrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getCommunityDetails(query?.id));
            await store.dispatch(getCommunityProjects(query?.id));
            const community = store.getState().community.community;
            const projects = store.getState().community.projects;
            const serializedError = store.getState().community.error;
            return {
                props: {
                    community,
                    id: query.id,
                    projects,
                    error: serializedError,
                },
            };
        }
);
export default Author;
