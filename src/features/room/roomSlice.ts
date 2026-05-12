import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RoomData, ToBookRoomData } from "./types";
import { initialToBookState } from "./constants";

interface RoomState {
  headerTitle: string;
  currentStep: string;
  data: RoomData[];
  toBook: ToBookRoomData;
}

const initialState: RoomState = {
  headerTitle: "Room",
  currentStep: "Booking Details",
  data: [
    {
      id: "382nRb",
      img: "./src/assets/img/presidential.png",
      title: "Presidential Suite",
      description: "Experience the pinnacle of hospitality in our crown jewel.",
      size: "1200 sq ft",
      bedType: "1 x King size bed",
      roomNumber: "12-7",
      price: 1200,
    },
    {
      id: "aywkW7",
      img: "./src/assets/img/family.png",
      title: "Family Room",
      description:
        "Spacious and comfortable, ideal for families to have a good time.",
      size: "1200 sq ft",
      bedType: "2 x Queen size bed",
      roomNumber: "9-2",
      price: 850,
    },
    {
      id: "XffehM",
      img: "./src/assets/img/deluxe.png",
      title: "Deluxe Room",
      description:
        "A perfect blend of contemporary design and refined comfort.",
      size: "1200 sq ft",
      bedType: "1 x Queen size bed",
      roomNumber: "10-3",
      price: 550,
    },
    {
      id: "619Z6O",
      img: "./src/assets/img/standard.png",
      title: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "5-3",
      price: 350,
    },
    {
      id: "556GoD",
      img: "./src/assets/img/standard.png",
      title: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "6-4",
      price: 350,
    },
    {
      id: "zTXuce",
      img: "./src/assets/img/standard.png",
      title: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "7-5",
      price: 350,
    },
  ],
  toBook: initialToBookState,
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
  },
});

export const { setHeaderTitle, setData, setCurrentStep, setToBook } =
  roomSlice.actions;
export default roomSlice.reducer;
