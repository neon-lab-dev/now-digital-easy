import axios from "axios";
import { API_URL } from ".";
import { axiosInstance } from "./axios";

export type ICurrency = {
  _id: string;
  code: string;
  country: string;
  locale: string;
  countryCode: string;
  isdefault: boolean;
};
export const handleGetAllCurrenciesService = async (): Promise<ICurrency[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.currencies)
      .then((response) => {
        resolve(response.data?.data ?? []);
      })
      .catch((error) => {
        reject(error.response?.data?.error ?? "Something went wrong");
      });
  });
};
