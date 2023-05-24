import SEO from "@components/seo";
import ExploreProductArea from "@containers/explore-product/layout-08";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo data
import { getOrganizations } from "@redux/slices/organizations";
import { wrapper } from "@redux/store";

const Home02 = ({ organizations }) => (
    <Wrapper>
        <SEO pageTitle="Donations" />
        <Header />
        <main id="main-content">
            <ExploreProductArea organizations={organizations} />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getOrganizations());
        const serializedOrganizations = store.getState().organization.organizations;
        console.log(serializedOrganizations);
        const serializedError = store.getState().organization.error;
        return {
            props: {
                organizations: serializedOrganizations,
                error: serializedError,
            },
        };
    }
);

