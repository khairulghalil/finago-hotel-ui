interface BookingSectionProps {}
import { useNavigate } from "react-router-dom";
import { setHeaderTitle } from "../roomSlice";
import { useAppDispatch } from "../../../store/hooks";

function BookingSection({}: BookingSectionProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="text-end mb-3 pe-3 text-muted pointer">
        <span onClick={() => navigate("/")}>Home / </span>
        <span onClick={() => dispatch(setHeaderTitle("Room"))}>Room / </span>
        <span className="fw-boldest">Booking</span>
      </div>
    </>
  );
}

export default BookingSection;
