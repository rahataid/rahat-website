import { createSlice } from "@reduxjs/toolkit";
import { CategoriesService } from "@services/category";

const initialState = {
    isLoading: false,
    error: null,
    categories: [],
};

const slice = createSlice({
    name: "category",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        getCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categories = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

// Thunk for fetching organizations
export const getCategories = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CategoriesService.getCategoriesList();

            dispatch(slice.actions.getCategoriesSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};
