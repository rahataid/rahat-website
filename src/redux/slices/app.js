import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isInitialized: true,
    token: null,
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
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
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
    },
});
export const { login, addUser } = appSlice.actions;

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

export default appSlice.reducer;
