import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isSidebarActive: false,
  activeAuthTab: null as "login" | "signup" | null,
};

const sidebarSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setIsSideBarActive: (state, action: PayloadAction<boolean>) => {
      state.isSidebarActive = action.payload;
    },
    setActiveAuthTab: (
      state,
      action: PayloadAction<"login" | "signup" | null>
    ) => {
      state.activeAuthTab = action.payload;
    },
  },
});

export const { setIsSidebarOpen, setIsSideBarActive, setActiveAuthTab } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
