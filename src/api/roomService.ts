import axiosInstance from "./axios";
import type {
  RoomData,
  ToBookRoomData,
  RoomTypeOpt,
} from "../features/room/types";

export const roomApi = {
  // Get all rooms
  getAllRooms: async () => {
    const response = await axiosInstance.get<RoomData[]>("/rooms");
    return response.data;
  },

  // Get room by ID
  getRoomById: async (id: string) => {
    const response = await axiosInstance.get<RoomData>(`/rooms/${id}`);
    return response.data;
  },

  // Create booking
  createBooking: async (bookingData: ToBookRoomData) => {
    const response = await axiosInstance.post("/bookings", bookingData);
    return response.data;
  },

  // Get available rooms by date range
  getAvailableRooms: async (checkIn: string, checkOut: string) => {
    const response = await axiosInstance.get<RoomData[]>("/rooms/available", {
      params: { checkIn, checkOut },
    });
    return response.data;
  },

  // Update booking
  updateBooking: async (id: string, bookingData: Partial<ToBookRoomData>) => {
    const response = await axiosInstance.put(`/bookings/${id}`, bookingData);
    return response.data;
  },

  // Cancel booking
  cancelBooking: async (id: string) => {
    const response = await axiosInstance.delete(`/bookings/${id}`);
    return response.data;
  },

  getRoomTypeOpt: async () => {
    const response = await axiosInstance.get<{
      data: RoomTypeOpt[];
    }>("/room/getRoomTypeOpt");

    return response.data.data;
  },
};

// Example usage:
// import { roomApi } from '../api/roomService';
//
// const fetchRooms = async () => {
//   try {
//     const rooms = await roomApi.getAllRooms();
//     console.log(rooms);
//   } catch (error) {
//     console.error('Failed to fetch rooms:', error);
//   }
// };
