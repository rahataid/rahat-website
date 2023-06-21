import SEO from "@components/seo";
import OrganizationForm from "@containers/signup-form";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "src/layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const SignUpForm = () => (
    <Wrapper>
        <SEO pageTitle="Organization Form" />
        <Header />
        <main id="main-content">
            <OrganizationForm />
        </main>
        <Footer />
    </Wrapper>
);

export default SignUpForm;
