import Summary from "@components/donation-summary";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data

export default function Donations({ donations }) {
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
};