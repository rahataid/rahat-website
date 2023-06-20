import SEO from "@components/seo";
import UserIntroArea from "@containers/user/user-intro";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

// Demo data
import authorData from "../../../data/author.json";

const UserProfile = () => (
    <Wrapper>
        <SEO pageTitle="User" />
        <Header />
        <main id="main-content">
            <UserIntroArea data={authorData} />
            {/* <UserProfileArea data={{ products: productData }} /> */}
        </main>
        <Footer />
    </Wrapper>
);

export default UserProfile;
