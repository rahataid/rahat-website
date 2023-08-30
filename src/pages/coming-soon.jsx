import ComingSoonPage from "@components/coming-soon";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const ComingSoonDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Coming Soon" />
            <Header />
            <ComingSoonPage />
            <Footer />
        </Wrapper>
    );
};

export default ComingSoonDetailPage;

