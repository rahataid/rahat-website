import SEO from "@components/seo";
import RahatBeemaPage from "@containers/rahat-beema-page";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const RahatBeemaDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Rahat Beema" />
            <Header />
            <RahatBeemaPage />
            <Footer />
        </Wrapper>
    );
};

export default RahatBeemaDetailPage;

