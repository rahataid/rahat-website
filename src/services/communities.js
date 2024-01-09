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

    updateByManager: (address, data) => {
        return client.patch(`/communities/${address}/update`, {
            ...data,
        });
    },

    uploadAsset: (id, assetData) => {
        return client.patch(`/communities/${id}/asset`, {
            ...assetData,
        });
    },
};

