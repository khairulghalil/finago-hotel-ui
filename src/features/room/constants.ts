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

export const initialStayPeriod = [
  {
    startDate: new Date().toISOString(),
    endDate: (() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString();
    })(),
    key: "selection",
  },
];
