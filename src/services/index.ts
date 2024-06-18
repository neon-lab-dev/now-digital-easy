export const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const API_URL = {
  login: BASE_URL + "/client/signin",
  signup: BASE_URL + "/client/signup",
  userDetails: BASE_URL + "/user/me",

  cart: BASE_URL + "/cart",

  checkDomainAvailability: BASE_URL + "/product/domain_availability",

  payment: BASE_URL + "/payment/makepayment",
  demo: BASE_URL + "",

  currencies: BASE_URL + "/currencies",
  gsuite: BASE_URL + "/product/gsuite", // country_code=
  hosting: BASE_URL + "/product/hosting", // country_code=
};
