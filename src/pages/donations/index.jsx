import SEO from "@components/seo";
import ExploreProductArea from "@containers/explore-product/layout-08";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "src/layout/wrapper";

// Demo data
import { getDonations } from "@redux/slices/donation";
import { wrapper } from "@redux/store";

const Home02 = ({ donations }) => {
    return (
        <Wrapper>
            <SEO pageTitle="Donations" />
            <Header />
            <main id="main-content">
                <ExploreProductArea donations={donations} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getDonations());
        const serializedDonations = store.getState().donation.donations;
        console.log(serializedDonations);
        const serializedError = store.getState().donation.error;
        return {
            props: {
                donations: serializedDonations,
                error: serializedError,
            },
        };
    }
);
