import { createSlice } from "@reduxjs/toolkit";
import { DonationsService } from "@services/donations";

const initialState = {
    isLoading: false,
    error: null,
    organizations: [],
    organization: null,
};

const slice = createSlice({
    name: "donation",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        getDonationsSuccess(state, action) {
            state.isLoading = false;
            state.communities = action.payload;
        },
        getDonationSuccess(state, action) {
            state.isLoading = false;
            state.community = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

export const selectDonations = (state) => state.donations.donations;

// Thunk for fetching donations
export const getDonations = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await DonationsService.getDonationsList();

            dispatch(slice.actions.getDonationsSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const donationDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } = await DonationsService.getDonationDetails(id);

            dispatch(slice.actions.getDonationSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
