import { UPLOAD_ASSET_HOST } from "@config";
import axios from "axios";

const api = axios.create({
    baseURL: UPLOAD_ASSET_HOST,
});

export const AssetUploadService = {
    uploadImage: async (formData) => {
        return api.post("/assets", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};
