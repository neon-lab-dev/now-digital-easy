export const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const API_URL = {
  login: BASE_URL + "/client/signin",
  signup: BASE_URL + "/client/signup",
  userDetails: BASE_URL + "/user/me",

  cart: BASE_URL + "/cart",

  checkDomainAvailability:
    BASE_URL + "/product/domain_availability?country_code=IN",
};
