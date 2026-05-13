import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RoomData, StayPeriod, ToBookRoomData } from "./types";
import { initialToBookState } from "./constants";

interface RoomState {
  headerTitle: string;
  currentStep: string;
  data: RoomData[];
  toBook: ToBookRoomData;
  stayPeriod: StayPeriod[];
}

const initialState: RoomState = {
  headerTitle: "Room",
  currentStep: "Booking Details",
  data: [],
  toBook: initialToBookState,
  stayPeriod: [
    {
      startDate: new Date().toISOString(),
      endDate: (() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString();
      })(),
      key: "selection",
    },
  ],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      state.headerTitle = action.payload;
    },
    setData: (state, action: PayloadAction<RoomData[] | null>) => {
      state.data = action.payload || [];
    },
    setCurrentStep: (state, action: PayloadAction<string>) => {
      state.currentStep = action.payload;
    },
    setToBook: (state, action: PayloadAction<ToBookRoomData>) => {
      state.toBook = action.payload;
    },
    setStayPeriod: (state, action: PayloadAction<StayPeriod[]>) => {
      state.stayPeriod = action.payload;
    },
  },
});

export const {
  setHeaderTitle,
  setData,
  setCurrentStep,
  setToBook,
  setStayPeriod,
} = roomSlice.actions;
export default roomSlice.reducer;
