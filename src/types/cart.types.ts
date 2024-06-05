export interface ICartItemDomain {
  productName: string;
  domainprice: number;
  groupName: string;
  available: boolean;
  message: string;
  productId: string;
  EppCode: string;
  _id: string;
  domainName: string;
  product: "domain";
  date: string;
  period: string;
  year: number;
  quantity: number;
  service_type: string;
}

export type ICartItem = ICartItemDomain;
