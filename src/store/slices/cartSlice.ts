import { getLocalStorage, setLocalStorage } from "@/helpers/localstorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ICartItemDomainLocal = {
  product: string;
  productId: string;
  domainName: string;
  period: string;
  type: string;
  qty: number;
  name: string;
};

const initialState = {
  cartItems: getLocalStorage<ICartItemDomainLocal[]>("cartItems")! || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCartItem: (state, action: PayloadAction<string>) => {
      setLocalStorage(
        "cartItems",
        state.cartItems.filter((item) => item.productId !== action.payload)
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
    },
    addCartItem: (state, action: PayloadAction<ICartItemDomainLocal>) => {
      const isItemExist = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      // if item already exist in cart then override the whole item
      if (isItemExist) {
        const data = state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return action.payload;
          } else {
            return item;
          }
        });
        setLocalStorage("cartItems", data);
        state.cartItems = data;
        return;
      }

      setLocalStorage("cartItems", [...state.cartItems, action.payload]);
      state.cartItems = [...state.cartItems, action.payload];
    },
    updateACartItem: (
      state,
      action: PayloadAction<Partial<ICartItemDomainLocal>>
    ) => {
      const data = state.cartItems.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, ...action.payload };
        } else {
          return item;
        }
      });
      setLocalStorage("cartItems", data);
      state.cartItems = data;
    },
  },
});

export const { addCartItem, deleteCartItem, updateACartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
