import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const communityApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getCommunities: builder.query({
            query: (name) => `/pokemon/${name}`,
        }),
        // Add more API endpoints here as needed
    }),
});

export const { useGetCommunitiesQuery } = communityApi;
export const { endpoints: apiEndpoints } = communityApi;
