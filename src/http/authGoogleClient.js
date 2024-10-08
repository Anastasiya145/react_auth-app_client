import { createClient } from "./index.js";

export const authGoogleClient = createClient();

authGoogleClient.interceptors.response.use((res) => res.data);
