import axios from "axios";

export const service = axios.create({
  baseURL: "http://localhost:9090", //process.env.VUE_APP_BACKEND,
  timeout: 30000
});
