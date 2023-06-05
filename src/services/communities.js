import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: () => {
        return client.get(`/communities`);
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
