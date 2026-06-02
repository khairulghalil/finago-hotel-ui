import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  headerShown: boolean;
  footerShown: boolean;
}

const initialState: AppState = {
  headerShown: true,
  footerShown: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHeaderShown: (state, action: PayloadAction<boolean>) => {
      state.headerShown = action.payload;
    },
    setFooterShown: (state, action: PayloadAction<boolean>) => {
      state.footerShown = action.payload;
    },
  },
});

export const { setHeaderShown, setFooterShown } = appSlice.actions;
export default appSlice.reducer;
