import { authGoogleClient } from "../http/authGoogleClient";

function googleLogin({ tokenId }) {
  return authGoogleClient.post("/google/login", { tokenId });
}

export const authGoogleService = {
  googleLogin,
};
