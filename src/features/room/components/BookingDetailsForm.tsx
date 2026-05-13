import { setCurrentStep } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface BookingDetailsFormProps {}

function BookingDetailsForm({}: BookingDetailsFormProps) {
  const toBook = useAppSelector((state) => state.room.toBook);
  const dispatch = useAppDispatch();
  return (
    <>
      <form>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="roomTypeInput" className="form-label fw-boldest">
              Room Type
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="roomTypeInput"
              placeholder="Enter room type"
              value={toBook?.roomType || ""}
              disabled
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="roomNumberInput" className="form-label fw-boldest">
              Room Number
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="roomNumberInput"
              placeholder="Enter room number"
              value={toBook?.roomNumber || ""}
              disabled
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="checkInDateInput" className="form-label fw-boldest">
              Check-In Date
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="checkInDateInput"
              placeholder="Enter check-in date"
              value={toBook?.checkInDate || ""}
              disabled
            />
          </div>
          <div className="col-6 mb-3">
            <label
              htmlFor="checkOutDateInput"
              className="form-label fw-boldest"
            >
              Check-Out Date
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="checkOutDateInput"
              placeholder="Enter check-out date"
              value={toBook?.checkOutDate || ""}
              disabled
            />
          </div>
        </div>
      </form>
      <div className="text-end">
        <button
          type="submit"
          className="btn btn-primary shadow-none mt-3 px-4"
          onClick={() => dispatch(setCurrentStep("Guest Information"))}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default BookingDetailsForm;
