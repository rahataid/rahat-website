import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: (query) => {
        return client.get("/communities", {
            params: query,
        });
    },
    getCommunitiyDetails: (address) => {
        return client.get(`/communities/${address}`);
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
