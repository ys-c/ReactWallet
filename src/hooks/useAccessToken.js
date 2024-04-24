import { useState } from "react";

const useAccessToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("accessToken");
    console.log("tokenString: ", tokenString);
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken == null) {
      setToken(null);
      sessionStorage.removeItem("accessToken");
      return;
    }
    sessionStorage.setItem("accessToken", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    accessToken: token,
    setAccessToken: saveToken,
  };
};

export default useAccessToken;