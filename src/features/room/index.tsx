import { useEffect } from "react";
import { setHeaderTitle, setCurrentStep, setData } from "./roomSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RoomSection from "./components/RoomSection";
import BookingSection from "./components/BookingSection";
import "./room.css";

function Room() {
  const dispatch = useAppDispatch();
  const headerTitle = useAppSelector((state) => state.room.headerTitle);
  const data = [
    {
      id: "382nRb",
      img: "./src/assets/img/presidential.png",
      roomType: "Presidential Suite",
      description: "Experience the pinnacle of hospitality in our crown jewel.",
      size: "1200 sq ft",
      bedType: "1 x King size bed",
      roomNumber: "12-7",
      price: 1200,
    },
    {
      id: "aywkW7",
      img: "./src/assets/img/family.png",
      roomType: "Family Room",
      description:
        "Spacious and comfortable, ideal for families to have a good time.",
      size: "1200 sq ft",
      bedType: "2 x Queen size bed",
      roomNumber: "9-2",
      price: 850,
    },
    {
      id: "XffehM",
      img: "./src/assets/img/deluxe.png",
      roomType: "Deluxe Room",
      description:
        "A perfect blend of contemporary design and refined comfort.",
      size: "1200 sq ft",
      bedType: "1 x Queen size bed",
      roomNumber: "10-3",
      price: 550,
    },
    {
      id: "619Z6O",
      img: "./src/assets/img/standard.png",
      roomType: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "5-3",
      price: 350,
    },
    {
      id: "556GoD",
      img: "./src/assets/img/standard.png",
      roomType: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "6-4",
      price: 350,
    },
    {
      id: "zTXuce",
      img: "./src/assets/img/standard.png",
      roomType: "Standard Room",
      description: "A comfortable and well-appointed room for a relaxing stay.",
      size: "1200 sq ft",
      bedType: "2 x Single size bed",
      roomNumber: "7-5",
      price: 350,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setHeaderTitle("Room"));
    dispatch(setCurrentStep("Booking Details"));
    dispatch(setData(data));
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
