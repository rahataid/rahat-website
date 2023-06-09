import client from "@utils/communityClient";

export const CategoriesService = {
    getCategoriesList: () => {
        return client.get(`/categories`);
    },
};
