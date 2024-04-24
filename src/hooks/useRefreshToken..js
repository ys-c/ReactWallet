import { useState } from "react";

const useRefreshToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("refreshToken");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken == null) {
      setToken(null);
      sessionStorage.removeItem("refreshToken");
      return;
    }
    sessionStorage.setItem("refreshToken", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    refreshToken: token,
    setRefreshToken: saveToken,
  };
};

export default useRefreshToken;