import { BLOG_CMS_HOST } from "@config";
import axios from "axios";

const api = axios.create({
    baseURL: BLOG_CMS_HOST,
});

export const BlogService = {
    getBlogs: async () => {
        return api.get("/blogs/projects/rahat?category=Blog");
    },
};

