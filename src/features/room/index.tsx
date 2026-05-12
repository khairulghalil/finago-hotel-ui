import { useEffect } from "react";
import { setHeaderTitle, setCurrentStep } from "./roomSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RoomSection from "./components/RoomSection";
import BookingSection from "./components/BookingSection";
import "./room.css";

function Room() {
  const dispatch = useAppDispatch();
  const headerTitle = useAppSelector((state) => state.room.headerTitle);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setHeaderTitle("Room"));
    dispatch(setCurrentStep("Booking Details"));
  }, []);

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
