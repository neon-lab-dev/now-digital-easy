import axios from 'axios';
import { API_URL } from '.';

export interface IDemoCredentials {
  first_name: string;
  company_name: string;
  work_email: string;
  phone_number: string;
  hear_about_us?: string;
}

export const handleRequestDemoService = async (
  credentials: IDemoCredentials
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.demo, credentials)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data?.error?.message ?? 'Request Failed!');
      });
  });
};
