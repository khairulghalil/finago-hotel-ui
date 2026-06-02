import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/room/roomSlice";
import appReducer from "../AppSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
