import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: (query) => {
        return client.get(
            "/communities"

            // TODO:This is not the right pattern @abiskar-sapkota  it's causing errors in other requests
            // `/communities?${Object.entries(query)
            //     .map(([key, value]) => `${key}=${value}`)
            //     .join("&")}`
        );
    },
    getCommunitiyDetails: (id) => {
        return client.get(`/communities/${id}`);
    },

    uploadAsset: (id, assetData) => {
        return client.patch(`/communities/${id}/asset`, {
            ...assetData,
        });
    },
    searchCommunity: (searchKey) => {
        return client.get(`/communities/search/${searchKey}`);
    },
};
