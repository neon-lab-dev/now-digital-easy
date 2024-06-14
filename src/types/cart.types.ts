export interface ICartItemGsuite {
  productName: "gsuite";
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
  product: string;
  productId: string;
  period: string;
  quantity: number;
  service_type: string;
}

export interface ICartItemDomain {
  productName: "domain";
  domainName: string;
  product: string;
  productId: string;
  type: string;
  year: number;
  EppCode: string;
}

export interface ICartItemHosting {
  productName: "hosting";
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
