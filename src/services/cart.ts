import axios from "axios";
import { API_URL } from ".";
import { ICart } from "@/types/cart.types";

export const handleGetAllCartItemsService = async (
  currency_code: string = "INR",
  authToken: string = ""
): Promise<ICart> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.cart}?currency_code=${currency_code}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddAItemToCartService = async (
  dataToSend: any,
  token: string
) => {
  return new Promise(async (resolve, reject) => {
    handleGetAllCartItemsService("", token) //todo send currency code and token
      .then((cartItems: any) => {
        let data = [dataToSend];
        if (cartItems.length === 0) {
        } else {
          // @ts-ignore
          data = [...(cartItems.products ?? []), ...data];
        }
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
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleUpdateCartService = async ({
  data,
  token,
}: {
  data: any[];
  token: string;
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.cart, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
