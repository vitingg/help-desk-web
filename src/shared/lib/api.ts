import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:3000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
