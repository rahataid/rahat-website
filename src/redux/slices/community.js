import { createSlice } from "@reduxjs/toolkit";
import { CommunitiesService } from "@services/communities";

const initialState = {
    isLoading: false,
    error: null,
    communities: [],
    community: null,
    projects: [],
    transactions: [],
    geoLocation: [],
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
        getCommunityProjectsSuccess(state, action) {
            state.isLoading = false;
            state.projects = action.payload;
        },
        getGeoSucess(state, action) {
            state.isLoading = false;
            state.geoLocation = action.payload;
        },
        getCommunityTransactionsSuccess(state, action) {
            state.isLoading = false;
            state.transactions = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

export const selectCommunities = (state) => state.community.communities;
export const selectProjects = (state) => state.community.projects;

// Thunk for fetching communities
export const getCommunities = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiesList(
                params
            );

            dispatch(slice.actions.getCommunitiesSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getGeoLocation = () => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getAllGeoLoation();
            dispatch(slice.actions.getGeoSucess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getCommunityDetails = (id) => {
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

export const getCommunityProjects = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } =
                await CommunitiesService.getCommunitiyProjects(id);
            dispatch(slice.actions.getCommunityProjectsSuccess(res));
        } catch (error) {
            console.log({ error });
            dispatch(hasError(error));
        }
    };
};

