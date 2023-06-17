import SEO from "@components/seo";
import AuthorIntroArea from "@containers/author-intro";
import AuthorProfileArea from "@containers/author-profile";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "src/layout/wrapper";

// Demo data
import authorData from "../data/author.json";
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <AuthorIntroArea data={authorData} />
            <AuthorProfileArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Author;
