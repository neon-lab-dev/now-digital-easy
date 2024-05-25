import axios from "axios";
import Cookies from "js-cookie";
export const handleCheckDomainAvailability = async (
  domain: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://liveserver.nowdigitaleasy.com:5000/product/domain_availability?country_code=IN",
        {
          domain,
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
