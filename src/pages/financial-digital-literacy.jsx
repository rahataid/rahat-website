import SEO from "@components/seo";
import MainBannerPage from "@components/main-banner";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import FinancialDigitalLiteracyHomePage from "@containers/finance-digital-literacy-page";

const FinancialDigitalLiteracy = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Digital & Financial Literacy" />
            <Header />
            <MainBannerPage
                pageTitle={"Digital & Financial Literacy"}
                imageLink={"/images/banner/FinancialLiteracyBanner.png"}
            />
            <FinancialDigitalLiteracyHomePage />
            <Footer />
        </Wrapper>
    );
};

export default FinancialDigitalLiteracy;
