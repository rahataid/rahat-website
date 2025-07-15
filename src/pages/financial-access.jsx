import SEO from "@components/seo";
import MainBannerPage from "@components/main-banner";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import FinancialAccessContainer from "@containers/financial-access-container";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const FinancialAccess = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tabParam = searchParams.get("tab");

    const [bannerKey, setBannerKey] = useState("CVA");

    useEffect(() => {
        if (tabParam === "AA" || tabParam === "CVA") {
            setBannerKey(tabParam);
        }
    }, [tabParam]);

    const handleTabClick = (tab) => {
        // Update URL with query param without full page refresh
        router.push(`/financial-access?tab=${tab}`, undefined, {
            shallow: true,
            scroll: false,
        });
        setBannerKey(tab);
    };

    return (
        <Wrapper>
            <SEO pageTitle="FinancialAccess" />
            <Header />
            <MainBannerPage
                pageTitle={`${
                    bannerKey === "CVA"
                        ? "Cash and Voucher Assistance Programs"
                        : "Empowering climate risk communities through efficient Anticipatory Actions"
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
                handleTabClick={handleTabClick}
            />
            <Footer />
        </Wrapper>
    );
};

export default FinancialAccess;

