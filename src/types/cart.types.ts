export interface ICartItemGsuite {
  productName: string;
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

export type ICartItem = ICartItemGsuite;

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
