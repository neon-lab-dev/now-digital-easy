import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from ".";

export const handleCheckDomainAvailabilityService = async (
  domain: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.checkDomainAvailability, {
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

export const handleAddToCart = async (
  data: {
    product: string;
    productId: string;
    domainName: string;
    type: string;
    year: number;
    EppCode: string;
  }[]
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://liveserver.nowdigitaleasy.com:5000/cart",
        { data },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
