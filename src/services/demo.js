import { BLOG_CMS_HOST } from "@config";
import axios from "axios";

const api = axios.create({
    baseURL: BLOG_CMS_HOST,
});

export const DemoService = {
    submit: async (data) => {
        return api.post("/demo", data);
    },
};
