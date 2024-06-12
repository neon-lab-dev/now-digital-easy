import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from ".";

export const handleCheckDomainAvailabilityService = async ({
  domain,
  country_code = "IN",
}: {
  domain: string;
  country_code: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL.checkDomainAvailability}?country_code=${country_code}`, {
        domain,
      })
      .then((response) => {
        resolve(response.data?.response ?? []);
      })
      .catch((error) => {
        reject(error.response?.data?.error ?? "Something went wrong");
      });
  });
};