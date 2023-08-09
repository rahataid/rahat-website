import SEO from "@components/seo";
import CvaPage from "@containers/cva-page";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const CashInKindDistribution = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Cash In Kind Distribution Management Tool" />
            <Header />
            <CvaPage />
            <Footer />
        </Wrapper>
    );
};

export default CashInKindDistribution;

