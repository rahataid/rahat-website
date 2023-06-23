import Summary from "@components/donation-summary";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import { getDonationDetails } from "@redux/slices/donation";
import { wrapper } from "@redux/store";

export default function DonationView({ donations }) {
    return (
        <Wrapper>
            <SEO pageTitle="Donations" />
            <Header />
            <main id="main-content">
                <Summary />
            </main>
            <Footer />
        </Wrapper>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getDonationDetails(query?.id));
            const serializedDonations = store.getState().donation.donation;
            const serializedError = store.getState().donation.error;
            return {
                props: {
                    donations: serializedDonations,
                    error: serializedError,
                },
            };
        }
);
