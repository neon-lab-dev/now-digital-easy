export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  locale: string;
  country_code: string;
  country: string;
  currencyCode: string;
  companyName: string;
  city: string;
  pincode: string;
  state: string;
  gstin: string | null;
}
