import { IMPACTS_HOST } from "@config";
import axios from "axios";

const client = axios.create({
    baseURL: IMPACTS_HOST,
});

export default client;
