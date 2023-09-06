import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.app",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
