import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: (query) => {
        return client.get(
            `/communities`
        );
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
