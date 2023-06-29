import { createSlice } from "@reduxjs/toolkit";
import { AuthService } from "@services/auth";
import { saveCurrentUser } from "@utils/sessionManager";

const initialState = {
    isAuthenticated: false,
    isInitialized: true,
    token: null,
    errors: null,
    user: {
        name: "Rahat Donor",
        email: "donor@mailinator.com",
    },
    chainUrl: null,
    chainId: null,
    chainWebSocket: null,
    claimToken: null,
    contracts: null,
    addresses: null,
    roles: {
        isAdmin: false,
        isManager: false,
        isDonor: false,
        isStakeholder: false,
    },
};

export const appSlice = createSlice({
    name: "globalApp",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setOtp: (state, action) => {
            state.otp = action.payload.otp;
        },
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        setError: (state, action) => {
            state.errors = action.payload;
        },
    },
});
export const { login, addUser, setOtp, setError } = appSlice.actions;

export const selectUser = (state) => state.globalApp.user;
export const selectIsAuthenticated = (state) => state.globalApp.isAuthenticated;
export const selectIsInitialized = (state) => state.globalApp.isInitialized;
export const selectToken = (state) => state.globalApp.token;
export const selectChainUrl = (state) => state.globalApp.chainUrl;
export const selectChainId = (state) => state.globalApp.chainId;
export const selectChainWebSocket = (state) => state.globalApp.chainWebSocket;
export const selectClaimToken = (state) => state.globalApp.claimToken;
export const selectContracts = (state) => state.globalApp.contracts;
export const selectAddresses = (state) => state.globalApp.addresses;
export const selectRoles = (state) => state.globalApp.roles;
export const selectApp = (state) => state.globalApp;
export const selectOtp = (state) => state.globalApp?.otp;
export const selectError = (state) => state.globalApp?.errors;

export default appSlice.reducer;

export const requestOtp = (data) => async (dispatch) => {
    try {
        const otp = await AuthService.requestOtp(data);
        dispatch(setOtp(otp?.data));
        return otp?.data;
    } catch (error) {
        if (error?.response?.data) {
            dispatch(setError(error?.response?.data));
        }
    }
};

export const verifyOtp = (data) => async (dispatch) => {
    try {
        const user = await AuthService.verifyOtp(data);
        dispatch(login(user?.data));
        saveCurrentUser(user?.data);
        return user?.data;
    } catch (error) {
        if (error?.response?.data) {
            dispatch(setError(error?.response?.data));
        }
    }
};

export const loginWithWallet = (signMessage) => async (dispatch) => {
    if (!signMessage) return;
};
