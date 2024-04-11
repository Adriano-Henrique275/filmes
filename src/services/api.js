import axios from "axios";

export const key = process.env.EXPO_PUBLIC_KEY;

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
})

export default api;