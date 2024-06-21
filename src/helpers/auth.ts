import Cookies from "js-cookie";

export const getAuthTokenFromCookies = (): string => {
  const token = Cookies.get("auth_token");
  console.log(token);
  return token || "";
};

export const setAuthTokenCookie = (token: string) => {
  Cookies.set("auth_token", token);
};
