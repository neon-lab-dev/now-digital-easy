import axios from "axios";
import { API_URL } from ".";

export type DomainAvailabilityResponse = {
  domain: string;
  status: string;
  price: {
    productId: string;
    tld: string;
    year: number;
    registerPrice: number;
    _id: string;
  }[];
};

export const handleCheckDomainAvailabilityService = async ({
  domain,
  country_code = "IN",
}: {
  domain: string;
  country_code: string;
}): Promise<DomainAvailabilityResponse[]> => {
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
