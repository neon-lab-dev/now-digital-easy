import axios from "axios";
import { API_URL } from ".";

export type IHostingProduct = {
  _id: string;
  name: string;
  description: string;
  discount: number;
  price: {
    period: string;
    amount: number;
  }[];
};

export const handleGetHostingDetailsServices = async (
  country_code: string = "IN"
): Promise<IHostingProduct[]> => {
  console.log("country_code", country_code);
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.hosting}?country_code=${country_code}`)
      .then((response) => {
        resolve(response.data?.product ?? []);
      })
      .catch((error) => {
        reject(error.response?.data?.error ?? "Something went wrong");
      });
  });
};
