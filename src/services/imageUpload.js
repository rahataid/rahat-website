import { UPLOAD_ASSET_HOST } from "@config";
import axios from "axios";

const api = axios.create({
    baseURL: UPLOAD_ASSET_HOST,
});

export const ImageUploadService = {
    uploadImage: async (file) => {
        return api.post("/upload", {
            imageType,
            file,
        });
    },
};
