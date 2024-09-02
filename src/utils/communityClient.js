import { COMMUNITY_HOST } from "@config";
import axios from "axios";

const client = axios.create({
    baseURL: COMMUNITY_HOST,
});

export default client;

