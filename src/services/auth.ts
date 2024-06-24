import axios from "axios";
import { API_URL } from ".";
import { IUser } from "@/types/user.types";
import Cookies from "js-cookie";
export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  type: string;
  data: {
    jwtToken: string;
  };
  defaultWorkspace: string;
  workspaces: Array<{ id: string; name: string }>;
}

export const handleLoginService = async (
  credentials: ILoginCredentials
): Promise<ILoginResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.login, credentials)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data?.error?.message ?? "Login failed!");
      });
  });
};

export interface ISignupCredentials {
  companyName: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  phone_number: string;
  gstin: string;
}

export interface ISignupResponse {
  message: string;
  type: string;
  data: {
    user_id: string;
    jwtToken: string;
    fullName: string;
    email: string;
    role: string;
  };
}
export const handleSignupService = async (
  credentials: ISignupCredentials
): Promise<ISignupResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.signup, credentials)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data?.error?.message ?? "Signup failed!");
      });
  });
};

export const handleGetUserDetailsService = async (
  token: string = ""
): Promise<IUser | null> => {
  return new Promise((resolve, reject) => {
    if (!token) {
      resolve(null);
    }
    axios
      .get(API_URL.userDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        resolve(null);
      });
  });
};
