import { createSlice } from "@reduxjs/toolkit";
import { communityApi } from "@services/communities";

const initialState = {
    isLoading: false,
    error: null,
    communities: [],
    community: null,
};

const slice = createSlice({
    name: "communities",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getCommunitiesSuccess(state, action) {
            state.isLoading = false;
            state.communities = action.payload;
        },
        getCommunitySuccess(state, action) {
            state.isLoading = false;
            state.community = action.payload;
        },
    },
});

export default slice.reducer;

export const { hasError } = slice.actions;

export const { useGetCommunitiesQuery } = communityApi;

// Thunk for fetching communities
export const getCommunities = (params) => {
    return async (dispatch) => {
        try {
            dispatch(communityApi.endpoints.getCommunities.initiate(params));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
