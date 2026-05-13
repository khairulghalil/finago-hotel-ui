import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  RoomData,
  RoomTypeOpt,
  StayPeriod,
  ToBookRoomData,
} from "./types";
import { initialStayPeriod, initialToBookState } from "./constants";

interface RoomState {
  headerTitle: string;
  currentStep: string;
  data: RoomData[];
  toBook: ToBookRoomData;
  stayPeriod: StayPeriod[];
  roomTypeOpt: RoomTypeOpt[];
  roomTypeSelected: string;
  bookedDatesStrings: string[];
}

const initialState: RoomState = {
  headerTitle: "Room",
  currentStep: "Booking Details",
  data: [],
  toBook: initialToBookState,
  stayPeriod: initialStayPeriod,
  roomTypeOpt: [],
  roomTypeSelected: "all",
  bookedDatesStrings: [],
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
    setRoomTypeOpt: (state, action: PayloadAction<RoomTypeOpt[]>) => {
      state.roomTypeOpt = action.payload;
    },
    setRoomTypeSelected: (state, action: PayloadAction<string>) => {
      state.roomTypeSelected = action.payload;
    },
    setBookedDatesStrings: (state, action: PayloadAction<string[]>) => {
      state.bookedDatesStrings = action.payload;
    },
  },
});

export const {
  setHeaderTitle,
  setData,
  setCurrentStep,
  setToBook,
  setStayPeriod,
  setRoomTypeOpt,
  setRoomTypeSelected,
  setBookedDatesStrings,
} = roomSlice.actions;
export default roomSlice.reducer;
