import SEO from "@components/seo";
import EditProfileArea from "@containers/edit-profile";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const EditProfile = () => (
    <Wrapper>
        <SEO pageTitle="Admin" />
        <Header />
        <main id="main-content">
            <EditProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default EditProfile;
