import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) =>
  api.post("/api/users/auth/login", { email, password });
export const register = (name, email, password) =>
  api.post("/api/users/auth/register", { name, email, password });
export const getMe = () => api.get("/api/users/auth/me");

export default api;
