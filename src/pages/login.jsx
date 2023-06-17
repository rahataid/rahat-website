import Breadcrumb from "@components/breadcrumb";
import SEO from "@components/seo";
import LoginArea from "@containers/login";
import GuestGuard from "@guards/GuestGuard";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "src/layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Login = () => (
    <GuestGuard>
        <Wrapper>
            <SEO pageTitle="Log In" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Login" currentPage="Login" />
                <LoginArea />
            </main>
            <Footer />
        </Wrapper>
    </GuestGuard>
);

export default Login;
