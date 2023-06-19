import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { appSlice } from "./slices/app";
import blogsSlice from "./slices/blogs";
import categoryReducer from "./slices/category";
import commmunityReducer from "./slices/community";
import donationReducer from "./slices/donation";
import organizationReducer from "./slices/organization";
// slices

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    setItem(_key, value) {
        return Promise.resolve(value);
    },
    removeItem() {
        return Promise.resolve();
    },
});

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

// const productPersistConfig = {
//     key: "product",
//     storage,
//     keyPrefix: "redux-",
//     whitelist: ["sortBy", "checkout"],
// };

const rootReducer = combineReducers({
    [commmunityReducer.name]: commmunityReducer.reducer,
    [organizationReducer.name]: organizationReducer.reducer,
    [donationReducer.name]: donationReducer.reducer,
    [categoryReducer.name]: categoryReducer.reducer,
    [appSlice.name]: appSlice.reducer,
    [blogsSlice.name]: blogsSlice.reducer,
});

export { rootPersistConfig, rootReducer };
