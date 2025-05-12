import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

// read any existing token on startup
const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
