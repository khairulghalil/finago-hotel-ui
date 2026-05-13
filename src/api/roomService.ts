import axiosInstance from "./axios";
import type { ToBookRoomData, RoomTypeOpt } from "../features/room/types";

export const roomApi = {
  createBooking: async (bookingData: ToBookRoomData) => {
    const response = await axiosInstance.post("/bookings", bookingData);
    return response.data;
  },

  getRoomTypeOpt: async () => {
    const response = await axiosInstance.get<{
      data: RoomTypeOpt[];
    }>("/room/getRoomTypeOpt");

    return response.data.data;
  },
};
