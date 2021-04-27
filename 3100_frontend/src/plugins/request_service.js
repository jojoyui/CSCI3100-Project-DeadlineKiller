import axios from "axios";

// connect the backend service
export const service = axios.create({
  baseURL: "http://localhost:9090", //process.env.VUE_APP_BACKEND,
  timeout: 30000
});
