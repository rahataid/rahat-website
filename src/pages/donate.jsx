import SEO from "@components/seo";
import DonationForm from "@containers/donation-form";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => (
    <Wrapper>
        <SEO pageTitle="Create New" />
        <Header />
        <main id="main-content">
            <DonationForm />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
