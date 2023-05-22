import client from "@utils/client";

export const CommunitiesService = {
    getCommunitiesList: () => {
        return client.get("/pokemon/pikachu");
    },
};
