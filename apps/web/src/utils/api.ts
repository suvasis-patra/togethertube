import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: baseURL || "http://localhost:8080",
  withCredentials: true,
});

export default api;
