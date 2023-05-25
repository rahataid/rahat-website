import { createSlice } from "@reduxjs/toolkit";
import { CommunitiesService } from "@services/communities";

const initialState = {
    isLoading: false,
    error: null,
    communities: [],
    community: null,
};

const slice = createSlice({
    name: "community",
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

export const selectCommunities = (state) => state.community.communities;

// Thunk for fetching communities
export const getCommunities = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiesList();

            dispatch(slice.actions.getCommunitiesSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const communityDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiyDetails(
                id
            );

            dispatch(slice.actions.getCommunitySuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
