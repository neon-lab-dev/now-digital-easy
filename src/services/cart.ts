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
        if (!cartItems || cartItems?.products?.length === 0) {
        } else {
          // @ts-ignore
          let oldCartItems = cartItems?.products?.filter((item) => {
            if (item.product === "gsuite" || item.product === "hosting") {
              // For 'gsuite' or 'domain', check both productId and domainName
              return !(
                item.product === dataToSend.product &&
                item.domainName === dataToSend.domainName
              );
            } else {
              // For other products, check only productId
              return item.productId !== dataToSend.productId;
            }
          });
          data = [...(oldCartItems ?? []), ...data];
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
