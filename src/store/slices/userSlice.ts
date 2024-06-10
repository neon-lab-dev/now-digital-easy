import { IUser } from "@/types/user.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null as null | IUser,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { clearUser, setUser, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
