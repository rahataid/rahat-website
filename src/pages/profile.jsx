import SEO from "@components/seo";
import AuthorProfileArea from "@containers/donations/details/profile";
import AuthorIntroArea from "@containers/intro";
import Footer from "@layout/footer";
import Header from "@layout/header";
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
