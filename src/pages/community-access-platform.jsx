import SEO from "@components/seo";
import CvaPage from "@containers/cva-page";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import CommunityAccessPlatformDetails from "@containers/community-accesss";

const CommunityAccessPlatform = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Community Access Platform" />
            <Header />
            <CommunityAccessPlatformDetails />
            <Footer />
        </Wrapper>
    );
};

export default CommunityAccessPlatform;

