import axios from "axios";
import { API_URL } from ".";

export type IGSuiteProduct = {
  _id: string;
  name: string;
  description: string;
  discount: number;
  price: {
    period: string;
    offerPrice: number;
    defaultPrice: number;
    type: string;
  }[];
};

export const handleGetGSuiteDetailsServices = async (
  country_code: string = "IN"
): Promise<IGSuiteProduct[]> => {
  console.log("country_code", country_code);
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.gsuite}?country_code=${country_code}`)
      .then((response) => {
        resolve(response.data?.products ?? []);
      })
      .catch((error) => {
        reject(error.response?.data?.error ?? "Something went wrong");
      });
  });
};
