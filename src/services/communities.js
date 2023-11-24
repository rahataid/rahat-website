import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: (query) => {
        return client.get("/communities", {
            params: query,
        });
    },
    getAllGeoLoation: () => {
        return client.get("/communities/geoLocation");
    },
    getCommunitiyDetails: (address) => {
        return client.get(`/communities/${address}`);
    },

    uploadAsset: (id, assetData) => {
        return client.patch(`/communities/${id}/asset`, {
            ...assetData,
        });
    },
};

