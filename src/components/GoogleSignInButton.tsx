import { FC } from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleSignInButton: FC = () => {
  return (
    <div id="signInButton">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const tokenId = credentialResponse.credential;
          console.log(credentialResponse, tokenId);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleSignInButton;
