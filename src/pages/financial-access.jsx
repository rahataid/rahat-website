import SEO from "@components/seo";
import MainBannerPage from "@components/main-banner";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import FinancialAccessContainer from "@containers/financial-access-container";
import { useState } from "react";

const FinancialAccess = () => {
    const [bannerKey, setBannerKey] = useState("CVA");
    return (
        <Wrapper>
            <SEO pageTitle="FinancialAccess" />
            <Header />
            <MainBannerPage
                pageTitle={`${
                    bannerKey === "CVA"
                        ? "Cash and Voucher Assistance Programs"
                        : "Anticipatory Action Programs"
                }`}
                imageLink={`${
                    bannerKey === "CVA"
                        ? "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/cva-mainbanner-1.jpg"
                        : "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/anticipatory-actions-main-banner.jpg"
                }`}
            />
            <FinancialAccessContainer
                bannerKey={bannerKey}
                setBannerKey={setBannerKey}
            />
            <Footer />
        </Wrapper>
    );
};

export default FinancialAccess;

