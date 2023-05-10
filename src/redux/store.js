import { configureStore } from "@reduxjs/toolkit";
import { communityApi } from "@services/communities";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

const makeStore = ({ reduxWrapperMiddleware, isServer }) => {
    if (isServer) {
        return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
    } else {
        const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

        const store = configureStore({
            reducer: persistedReducer,
            devTools: true,
            middleware: (getDefaultMiddleware) =>
                [
                    ...getDefaultMiddleware({
                        serializableCheck: {
                            ignoredActions: [
                                FLUSH,
                                REHYDRATE,
                                PAUSE,
                                PERSIST,
                                PURGE,
                                REGISTER,
                            ],
                        },
                    }),
                    process.browser ? logger : null,
                    communityApi.middleware,
                    reduxWrapperMiddleware,
                ].filter(Boolean),
        });
        store.__persistor = persistStore(store);

        return store;
    }
};

export const wrapper = createWrapper(makeStore, { debug: true });
