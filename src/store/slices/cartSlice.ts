import { getLocalStorage, setLocalStorage } from "@/helpers/localstorage";
import { ICartItemDomain, ICartItemHosting } from "@/types/cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type IGSuitLocal = {
  product: "gsuite";
  productId: string;
  domainName: string;
  period: string;
  type: string;
  quantity: number;
  name: string;
};

export type ICartLocal = IGSuitLocal | ICartItemDomain | ICartItemHosting;

const initialState = {
  cartItems: getLocalStorage<ICartLocal[]>("cartItems")! || [],
  redirectToCheckout: false,
  sidebarActiveStep: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCartItem: (
      state,
      action: PayloadAction<{ id: string; domain: string }>
    ) => {
      const newData = state.cartItems.filter((item) => {
        if (item.product === "gsuite" || item.product === "hosting") {
          return (
            item.productId !== action.payload.id ||
            item.domainName !== action.payload.domain
          );
        } else {
          return item.productId !== action.payload.id;
        }
      });

      setLocalStorage("cartItems", newData);
      state.cartItems = newData;
    },
    addCartItem: (state, action: PayloadAction<ICartLocal>) => {
      const isItemExist = state.cartItems.find((item) => {
        if (item.product === "gsuite" || item.product === "hosting") {
          return (
            item.productId === action.payload.productId &&
            item.domainName === action.payload.domainName
          );
        } else {
          return item.productId === action.payload.productId;
        }
      });

      // if item already exist in cart then override the whole item
      if (isItemExist) {
        const data = state.cartItems.map((item) => {
          if (item.product === "gsuite" || item.product === "hosting") {
            if (
              item.productId === action.payload.productId &&
              item.domainName === action.payload.domainName
            ) {
              return action.payload;
            } else {
              return item;
            }
          } else {
            if (item.productId === action.payload.productId) {
              return action.payload;
            } else {
              return item;
            }
          }
        });
        setLocalStorage("cartItems", data);
        state.cartItems = data;
        return;
      }

      setLocalStorage("cartItems", [...state.cartItems, action.payload]);
      state.cartItems = [...state.cartItems, action.payload];
    },
    updateACartItem: (state, action: PayloadAction<Partial<IGSuitLocal>>) => {
      const data = state.cartItems.map((item) => {
        if (item.product === "gsuite" || item.product === "hosting") {
          if (
            item.productId === action.payload.productId &&
            item.domainName === action.payload.domainName
          ) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        } else {
          if (item.productId === action.payload.productId) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        }
      });
      setLocalStorage("cartItems", data);
      // @ts-ignore
      state.cartItems = data;
    },
    setRedirectToCheckout: (state, action: PayloadAction<boolean>) => {
      state.redirectToCheckout = action.payload;
    },
    setSidebarActiveStep: (state, action: PayloadAction<number>) => {
      state.sidebarActiveStep = action.payload;
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  updateACartItem,
  setRedirectToCheckout,
  setSidebarActiveStep,
} = cartSlice.actions;
export default cartSlice.reducer;
