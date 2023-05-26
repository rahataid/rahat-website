import client from "@utils/communityClient";

export const CommunitiesService = {
    getCommunitiesList: () => {
        return client.get(`/communities`);
    },
    getCommunitiyDetails: (id) => {
        return client.get(`communities/${id}`);
    },
    getCommunitiyProjects: (id) => {
        return client.get(`communities/projects/${id}`);
    },
};
