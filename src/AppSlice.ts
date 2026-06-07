import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  user: {};
}

const initialState: AppState = {
  user: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<{}>) => {
      state.user = action.payload;
    },
  },
});

export const { createUser } = appSlice.actions;
export default appSlice.reducer;
