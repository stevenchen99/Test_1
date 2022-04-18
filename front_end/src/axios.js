const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:9999",
});

module.exports = api;
