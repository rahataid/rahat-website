import { communityApi } from "@services/communities";
import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
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
    [communityApi.reducerPath]: communityApi.reducer,
});

export { rootPersistConfig, rootReducer };
