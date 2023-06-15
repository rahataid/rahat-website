import SEO from "@components/seo";
import AuthorIntroArea from "@containers/author-intro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data
import AuthorProfileArea from "@containers/author-profile";
import donation from "../../../data/donations.json";

const Author = () => (
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

export default Author;
