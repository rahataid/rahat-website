import { createSlice } from "@reduxjs/toolkit";
import { OrganizationsService } from "@services/organization";

const initialState = {
    isLoading: false,
    error: null,
    organizations: [],
    organization: null,
};

const slice = createSlice({
    name: "organization",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        getOrganizationsSuccess(state, action) {
            state.isLoading = false;
            state.organizations = action.payload;
        },
        getOrganizationSuccess(state, action) {
            state.isLoading = false;
            state.organization = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

export const selectOrganizations = (state) => state.organization.organizations;

// Thunk for fetching organizations
export const getOrganizations = (query) => {
    return async (dispatch) => {
        try {
            const { data: res } =
                await OrganizationsService.getOrganizationsList(query);

            dispatch(slice.actions.getOrganizationsSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const organizationDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } =
                await OrganizationsService.getOrganizationDetails(id);

            dispatch(slice.actions.getOrganizationSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
