export interface ICartItemGsuite {
  product: "gsuite";
  gsuitePrice: number;
  singleofferPrice: number;
  offerUser: number;
  offerPrice: number;
  defaultUser: number;
  groupName: string;
  available: boolean;
  message: string;
  _id: string;
  domainName: string;
  productId: string;
  period: string;
  quantity: number;
  service_type: string;
}

export interface ICartItemDomain {
  product: "domain";
  domainName: string;
  productId: string;
  type: string;
  year: number;
  EppCode: string;
}

export interface ICartItemHosting {
  product: "hosting";
  productId: string;
  domainName: string;
  period: string;
}

export type ICartItem = ICartItemGsuite | ICartItemDomain | ICartItemHosting;

export type ICart = {
  products: ICartItem[];
  userId: string;
  gst: {
    cgst: {
      Amt: number;
      percentage: number;
    };
    sgst: {
      Amt: number;
      percentage: number;
    };
  };
  subTotal: number;
  Total: number;
};
