const { default: axios } = require("axios");

const client = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export default client;
