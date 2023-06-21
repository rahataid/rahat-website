import SEO from "@components/seo";
import UserIntroArea from "@containers/user/user-intro";
import UserProfileArea from "@containers/user/user-profile";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

// Demo data, delete when data is fetched from API
import productData from "../../../data/products.json";
import authorData from "../../../data/user.json";

const UserProfile = () => (
    <Wrapper>
        <SEO pageTitle="User" />
        <Header />
        <main id="main-content">
            <UserIntroArea data={authorData} />
            <UserProfileArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default UserProfile;
