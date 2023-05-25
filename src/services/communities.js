import { communityClient } from "@utils/client";

export const CommunitiesService = {
    getCommunitiesList: () => {
        return communityClient.get(`/communities`);
    },
    getCommunitiyDetails: (id) => {
        return communityClient.get(`communities/${id}`);
    },
};
