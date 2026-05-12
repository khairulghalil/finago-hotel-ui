import type { ToBookRoomData } from "./types";

export const initialToBookState: ToBookRoomData = {
  id: "",
  title: "",
  roomNumber: "",
  arrivalDate: "",
  departureDate: "",
  name: "",
  email: "",
  ic: "",
  phone: "",
  addOns: { breakfast: false, spa: false, airportTransfer: false },
  price: 0,
};
