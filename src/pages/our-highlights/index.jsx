import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import PressReleaseViewPage from "@components/press-release-page";
import OurHighlightListPage from "@components/our-highlight-list-page";

const OurHighlightsListPage = () => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Our Highlights"
                description={"List of all Our Highlights"}
            />
            <Header />
            {/* <BlogPage blogs={blogs.data} /> */}
            <OurHighlightListPage />
            <Footer />
        </Wrapper>
    );
};

export default OurHighlightsListPage;

