export interface RoomData {
  id: string;
  img: string;
  roomType: string;
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
  roomType: string;
  roomNumber: string;
  checkInDate: string;
  checkOutDate: string;
  name: string;
  email: string;
  icNumber: string;
  phone: string;
  addOns: AddOnsData;
  totalPrice: number;
  totalNights: number;
}

export interface StayPeriod {
  startDate: string;
  endDate: string;
  key: string;
}
