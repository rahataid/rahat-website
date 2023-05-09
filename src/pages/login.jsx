import Breadcrumb from "@components/breadcrumb";
import SEO from "@components/seo";
import LoginArea from "@containers/login";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Login = () => (
    <Wrapper>
        <SEO pageTitle="Log In" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Login" currentPage="Login" />
            <LoginArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Login;
