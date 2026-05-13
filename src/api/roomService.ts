import axiosInstance from "./axios";
import type {
  ToBookRoomData,
  RoomData,
  RoomTypeOpt,
} from "../features/room/types";

export const roomApi = {
  getRoomTypeOpt: async () => {
    const response = await axiosInstance.get<{
      data: RoomTypeOpt[];
    }>("/room/getRoomTypeOpt");

    return response.data.data;
  },

  getAvailableRoom: async (params: {
    roomCategoryId: string;
    checkInDate: string;
    checkOutDate: string;
  }) => {
    const response = await axiosInstance.post<{
      data: RoomData[];
    }>("/room/getAvailableRoom", params);

    return response.data.data;
  },

  getBookedDate: async (params: { roomId: string }) => {
    const response = await axiosInstance.post<{
      data: string[];
    }>("/book/getBookedDate", params);

    return response.data.data;
  },

  createBooking: async (params: ToBookRoomData) => {
    const response = await axiosInstance.post("/book/createBooking", params);
    return response.data;
  },
};
