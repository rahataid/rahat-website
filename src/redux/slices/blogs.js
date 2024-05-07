import { createSlice } from "@reduxjs/toolkit";
import { BlogService } from "@services/blogs";

const initialState = {
    isLoading: false,
    error: null,
    blogs: [],
    singleBlog: null,
};

const slice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        getBlogsSuccess(state, action) {
            state.isLoading = false;
            state.blogs = action.payload;
        },
        getBlogDetailSuccess(state, action) {
            state.isLoading = false;
            state.singleBlog = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

export const selectBlogs = (state) => state.blogs.blogs;

// Thunk for fetching communities
export const getBlogs = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await BlogService.getBlogs(params);
            dispatch(slice.actions.getBlogsSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getBlogDetails = (slug) => {
    return async (dispatch) => {
        try {
            const { data: res } = await BlogService.getBlogDetails(slug);
            dispatch(slice.actions.getBlogDetailSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

