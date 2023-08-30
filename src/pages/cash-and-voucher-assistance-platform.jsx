import SEO from "@components/seo";
import VideoArea from "@components/youtube-video";
import CashAndVouvherAssistancePage from "@containers/cash-and-voucher-assistance";
import { normalizedData } from "@utils/methods";
import MainBannerPage from "@components/main-banner";
import OurServices from "@components/our-services";
import homepageData from "../data/home.json";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const CvaDetailPage = () => {
    const content = normalizedData(homepageData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="cva" />
            <Header />
            <MainBannerPage
                pageTitle={"Cash And Voucher Assistance"}
                imageLink={
                    "https://assets.rumsan.com/rumsan-group/cva-mainbanner-1.jpg"
                }
            />
            <VideoArea data={content["video-section"]} />
            <CashAndVouvherAssistancePage />
            <OurServices />
            <Footer />
        </Wrapper>
    );
};

export default CvaDetailPage;

