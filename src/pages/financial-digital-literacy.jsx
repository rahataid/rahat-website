import SEO from "@components/seo";
import MainBannerPage from "@components/main-banner";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import FinancialDigitalLiteracyContainer from "@containers/financial-digital-literacy-container";

const FinancialDigitalLiteracy = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Financial Digital Literacy" />
            <Header />
            <MainBannerPage
                pageTitle={"Financial Digital Literacy"}
                imageLink={"/images/banner/FinancialLiteracyBanner.png"}
            />
            <FinancialDigitalLiteracyContainer />
            <Footer />
        </Wrapper>
    );
};

export default FinancialDigitalLiteracy;

