import client from "@utils/client";

export const CommunitiesService = {
    getCommunitiesList: () => {
        return client.get(`/communities`);
    },
    getCommunitiyDetails: (id) => {
        return client.get(`communities/${id}`);
    },
};
