import { createSlice } from "@reduxjs/toolkit";
import { DonationsService } from "@services/donations";

const initialState = {
    isLoading: false,
    error: null,
    donations: [],
    donation: null,
    transactions: [],
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
            console.log("actions", action);
            state.donations = action.payload;
        },
        getDonationSuccess(state, action) {
            state.isLoading = false;
            state.donation = action.payload;
        },
        getDonationTransactionSuccess(state, action) {
            state.isLoading = false;
            state.transactions = action.payload;
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

export const getDonationDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } = await DonationsService.getDonationDetails(id);

            dispatch(slice.actions.getDonationSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getDonationTransactions = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } = await DonationsService.getDonationDetails(id);

            dispatch(slice.actions.getDonationSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const addDonationTransaction = (payload) => {
    return async (dispatch) => {
        try {
            const { data: res } = await DonationsService.addDonation(payload);

            dispatch(slice.actions.getDonationSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
