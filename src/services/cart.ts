import axios from "axios";
import { API_URL } from ".";
import { ICartItemDomain } from "@/types/cart.types";
import { toast } from "react-toastify";

export const handleGetAllCartItemsService = async (token: string = "") => {
  return new Promise((resolve, reject) => {
    // get from local storage
    if (!token) {
      return resolve([]);
    }
    axios
      .get(API_URL.cart, {
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

export const handleAddADomainToCartService = async ({
  token = "",
  data: dataToSend,
}: {
  token: string;
  data: {
    product: string;
    productId: string;
    domainName: string;
    type: string;
    year: number;
    EppCode: string;
  };
}) => {
  return new Promise(async (resolve, reject) => {
    if (!token) {
      toast.error("Please login to add to cart!");
      return reject("Token is required");
    }
    handleGetAllCartItemsService(token)
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
  token = "",
  data,
}: {
  token: string;
  data: ICartItemDomain[];
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
