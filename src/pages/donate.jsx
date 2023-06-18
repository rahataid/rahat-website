import SEO from "@components/seo";
import DonationForm from "@containers/donation-form";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "src/layout/wrapper";

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
