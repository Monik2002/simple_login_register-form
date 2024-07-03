import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post("/api/users/login", data);
  return response.data;
};
