import SEO from "@components/seo";
import ProductArea from "@containers/explore-product/layout-01/community";
import { MapView } from "@containers/maps";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { getCategories } from "@redux/slices/category";
import { getCommunities } from "@redux/slices/community";

// Demo Data
import { wrapper } from "@redux/store";

export default function Product({ communities, categories, countries }) {
    return (
        <Wrapper>
            <SEO pageTitle="Communities" />
            <Header />
            <main id="main-content">
                <div>
                    <MapView
                        sx={{
                            height: 400,
                        }}
                        mapData={communities.map((r) => ({
                            latitude: r?.latitude,
                            longitude: r?.longitude,
                        }))}
                    />
                </div>
                <ProductArea
                    communities={communities}
                    countries={countries}
                    categories={categories}
                />
            </main>
            <Footer />
        </Wrapper>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            await store.dispatch(getCommunities(query));
            const countries = [];
            await store.dispatch(getCategories());
            const serializedCommunities =
                store.getState().community.communities;
            serializedCommunities.forEach(({ country }) =>
                countries.push(country)
            );
            const categories = store.getState().category.categories;
            const serializedError = store.getState().community.error;
            return {
                props: {
                    communities: serializedCommunities,
                    categories,
                    error: serializedError,
                    countries: Array.from(new Set(countries)),
                },
            };
        }
);
