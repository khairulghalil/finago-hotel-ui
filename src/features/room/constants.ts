import type { ToBookRoomData } from "./types";

export const initialToBookState: ToBookRoomData = {
  id: "",
  roomType: "",
  roomNumber: "",
  checkInDate: "",
  checkOutDate: "",
  name: "",
  email: "",
  icNumber: "",
  phone: "",
  addOns: { breakfast: false, spa: false, airportTransfer: false },
  totalPrice: 0,
  totalNights: 0,
};
