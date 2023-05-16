import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    token: null,
    user: null,
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
            state.user = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
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
