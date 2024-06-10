import axios from "axios";
import { API_URL } from ".";

export const handleCheckoutService = async ({
  token = "",
}: {
  token: string;
}) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      return reject("Token is required");
    }
    axios
      .post(
        API_URL.payment,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const options = {
          ...res.data.options,
          onDismiss: () => {
            reject("Payment Cancelled");
          },
        };
        // @ts-ignore
        const razor = new window.Razorpay(options);
        razor.open();
        resolve(res.data);
      })

      .catch((err) => {
        reject(err.response.data.message ?? "Something went wrong");
      });
  });
};
