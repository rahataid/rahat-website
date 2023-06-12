import SEO from "@components/seo";
import { DonationsList } from "@containers/donations/list";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data
import { getDonations } from "@redux/slices/donation";
import { wrapper } from "@redux/store";

const Donations = ({ donations }) => {
    return (
        <Wrapper>
            <SEO pageTitle="Donations" />
            <Header />
            <main id="main-content">
                <DonationsList donations={donations} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Donations;
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
