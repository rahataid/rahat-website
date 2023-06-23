import SEO from "@components/seo";
import { DonationsList } from "@containers/donations/list";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import { getDonations } from "@redux/slices/donation";
import { wrapper } from "@redux/store";

// Demo data

const Donations = ({ donations }) => {
    return (
        <Wrapper>
            <SEO pageTitle="Donations" />
            <Header />
            <main id="main-content">
                <DonationsList donations={donations?.rows} />
            </main>
            <Footer />
        </Wrapper>
    );
};
export default Donations;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getDonations(query));
            const serializedDonations = store.getState().donation.donations;
            const serializedError = store.getState().donation.error;
            return {
                props: {
                    donations: serializedDonations,
                    error: serializedError,
                },
            };
        }
);
