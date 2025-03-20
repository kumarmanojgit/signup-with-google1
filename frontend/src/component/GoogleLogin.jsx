import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
const GoogleLogin = () => {
  const responsegoogle = async (authres) => {
    try {
      console.log(authres);
    } catch (error) {
      console.error("error", error);
    }
  };
  const googlelogin = useGoogleLogin({
    onSuccess: responsegoogle,
    onError: responsegoogle,
    flow: "auth-code",
  });
  return (
    <div className="container">
      <button onClick={googlelogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
