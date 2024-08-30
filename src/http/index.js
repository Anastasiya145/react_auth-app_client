import axios from "axios";

export function createClient() {
  return axios.create({
    baseURL: "https://node-auth-app-server.vercel.app/",
    withCredentials: true,
  });
}
