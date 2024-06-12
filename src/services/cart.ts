import axios from "axios";
import { API_URL } from ".";
import { ICart, ICartItem } from "@/types/cart.types";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { axiosInstance } from "./axios";
import { ICartItemDomainLocal } from "@/store/slices/cartSlice";

export const handleGetAllCartItemsService = async (
  currency_code: string = "IN"
): Promise<ICart> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_URL.cart}?currency_code=${currency_code}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddAItemToCartService = async (dataToSend: any) => {
  return new Promise(async (resolve, reject) => {
    handleGetAllCartItemsService()
      .then((cartItems: any) => {
        let data = [dataToSend];
        if (cartItems.length === 0) {
        } else {
          // @ts-ignore
          data = [...(cartItems.products ?? []), ...data];
        }
        axiosInstance
          .post(API_URL.cart, { data })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleUpdateCartService = async ({ data }: { data: any[] }) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(API_URL.cart, { data })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleSyncCartItems = async ({
  token,
  data,
}: {
  token: string;
  data: any[];
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        API_URL.cart,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
