import { FC } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { authGoogleService } from "../services/authGoogleService";

const GoogleSignInButton: FC = () => {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const tokenId = credentialResponse.credential;

    console.log("tokenId", tokenId);

    await authGoogleService.googleLogin({ tokenId });
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        onSuccess={(credentialResponse) => handleSuccess(credentialResponse)}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
};

export default GoogleSignInButton;
