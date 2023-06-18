import SEO from "@components/seo";
import AuthorIntroArea from "@containers/author-intro";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import { getDonationDetails } from "@redux/slices/donation";
import { wrapper } from "@redux/store";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Wrapper from "src/layout/wrapper";
import EditProfileImage from "../../../containers/community/details/description";
import Wrapper from "@layout/wrapper";

// Demo data
import AuthorProfileArea from "@containers/author-profile";
import donation from "../../../data/donations.json";

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <AuthorIntroArea data={donation} />
            <AuthorProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Author;
