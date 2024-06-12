import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebar: sidebarSlice,
      user: userSlice,
      cart: cartSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
