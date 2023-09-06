import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import PressReleaseViewPage from "@components/press-release-page";

const PressReleasePage = () => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Press Release"
                description={"List of all Press Release"}
            />
            <Header />
            {/* <BlogPage blogs={blogs.data} /> */}
            <PressReleaseViewPage />
            <Footer />
        </Wrapper>
    );
};

export default PressReleasePage;

