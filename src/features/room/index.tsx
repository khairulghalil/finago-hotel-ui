import { useEffect, useRef } from "react";
import { format } from "date-fns";
import {
  setHeaderTitle,
  setCurrentStep,
  setData,
  setRoomTypeOpt,
} from "./roomSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RoomSection from "./components/RoomSection";
import BookingSection from "./components/BookingSection";
import "./room.css";
import { roomApi } from "../../api/roomService";

function Room() {
  const dispatch = useAppDispatch();
  const headerTitle = useAppSelector((state) => state.room.headerTitle);
  const roomTypeSelected = useAppSelector(
    (state) => state.room.roomTypeSelected,
  );
  const stayPeriod = useAppSelector((state) => state.room.stayPeriod);
  const initialized = useRef(false);

  const getRoomTypeOpt = async () => {
    try {
      const roomTypeOptions = await roomApi.getRoomTypeOpt();
      return roomTypeOptions;
    } catch (error) {
      return [];
    }
  };

  const getAvailableRoom = async () => {
    try {
      const params = {
        roomCategoryId: roomTypeSelected,
        checkInDate: format(new Date(stayPeriod[0].startDate), "yyyy-MM-dd"),
        checkOutDate: format(new Date(stayPeriod[0].endDate), "yyyy-MM-dd"),
      };
      const availableRooms = await roomApi.getAvailableRoom(params);
      return availableRooms;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initialize = async () => {
      window.scrollTo(0, 0);
      dispatch(setHeaderTitle("Room"));
      dispatch(setCurrentStep("Booking Details"));
      const roomTypeOptions = await getRoomTypeOpt();
      dispatch(setRoomTypeOpt(roomTypeOptions));
      const availableRooms = await getAvailableRoom();
      dispatch(setData(availableRooms));
    };
    initialize();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const availableRooms = await getAvailableRoom();
      dispatch(setData(availableRooms));
    };
    fetchData();
  }, [roomTypeSelected, stayPeriod]);

  return (
    <>
      <div className="container-fluid ps-5 header-title d-flex justify-content-between align-items-center">
        <h2 className="mb-0">{headerTitle}</h2>
      </div>
      <section data-aos="fade-up" id="room" className="room container">
        {headerTitle === "Room" && <RoomSection />}
        {headerTitle === "Booking" && <BookingSection />}
      </section>
    </>
  );
}

export default Room;
