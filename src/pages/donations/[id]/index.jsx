import SEO from "@components/seo";
import IntroArea from "@containers/intro";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ProfileArea from "@containers/donations/details/profile";

// Demo data
import donation from "../../../data/donations.json";

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <IntroArea data={donation} />
            <ProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Author;
