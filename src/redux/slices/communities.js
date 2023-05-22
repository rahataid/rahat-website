import { createSlice } from "@reduxjs/toolkit";
import { CommunitiesService } from "@services/communities";

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
            state.error = action.payload.message;
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

export default slice;

export const { hasError } = slice.actions;

export const selectCommunities = (state) => state.communities.communities;

// Thunk for fetching communities
export const getCommunities = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiesList();
            dispatch(slice.actions.getCommunitiesSuccess(res?.abilities));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
