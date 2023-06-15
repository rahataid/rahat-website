import SEO from "@components/seo";
import AuthorIntroArea from "@containers/author-intro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data
import AuthorProfileArea from "@containers/author-profile";
import { wrapper } from "@redux/store";
import { getDonationDetails } from "@redux/slices/donation";

const Author = ({ donation }) => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <AuthorIntroArea data={donation} />
            <AuthorProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getDonationDetails(query.id));
            const donation = store.getState().donation.donation;
            const serializedError = store.getState().donation.error;
            return {
                props: {
                    donation,
                    error: serializedError,
                },
            };
        }
);

export default Author;
