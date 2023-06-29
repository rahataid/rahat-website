import SEO from "@components/seo";
import CommunityArea from "@containers/community";
import { MapView } from "@containers/maps";
import Footer from "@layout/footer";
import Header from "@layout/header";
import { getCategories } from "@redux/slices/category";
import { getCommunities } from "@redux/slices/community";
import Wrapper from "src/layout/wrapper";

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
                        mapData={communities?.map((r) => ({
                            latitude: r?.latitude,
                            longitude: r?.longitude,
                        }))}
                    />
                </div>
                <CommunityArea
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
            [];
            await store.dispatch(getCategories());
            const serializedCommunities =
                store.getState().community.communities;
            const countries = [
                ...new Set(serializedCommunities?.map((r) => r.country)),
            ].map((country) => ({ text: country, value: country }));

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
