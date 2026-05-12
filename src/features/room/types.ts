export interface RoomData {
  id: string;
  img: string;
  title: string;
  description: string;
  size: string;
  bedType: string;
  roomNumber: string;
  price: number;
}

export interface AddOnsData {
  breakfast: boolean;
  spa: boolean;
  airportTransfer: boolean;
}

export interface ToBookRoomData {
  id: string;
  title: string;
  roomNumber: string;
  arrivalDate: string;
  departureDate: string;
  name: string;
  email: string;
  ic: string;
  phone: string;
  addOns: AddOnsData;
  price: number;
}
