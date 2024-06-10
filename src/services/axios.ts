import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  headers: {
    Authorization: "Bearer " + Cookies.get("token"),
  },
});
