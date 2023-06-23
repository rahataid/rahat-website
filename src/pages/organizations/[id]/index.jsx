import SEO from "@components/seo";
import OrganizationIntroArea from "@containers/organization/organization-intro";
import OrganizationProfileArea from "@containers/organization/organizations-profile";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

// Demo data, delete when data is fetched from API
import productData from "../../../data/products.json";
import authorData from "../../../data/user.json";

const OrganizationProfile = () => (
    <Wrapper>
        <SEO pageTitle="Organization" />
        <Header />
        <main id="main-content">
            <OrganizationIntroArea data={authorData} />
            <OrganizationProfileArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default OrganizationProfile;
