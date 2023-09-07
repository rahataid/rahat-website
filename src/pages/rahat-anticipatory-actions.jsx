import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import AnticipatoryActionsPage from "@containers/anticipatory-action-page";
const AniticipatoryActionsDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Rahat Anticipatory Actions" />
            <Header />
            <AnticipatoryActionsPage />
            <Footer />
        </Wrapper>
    );
};

export default AniticipatoryActionsDetailPage;

