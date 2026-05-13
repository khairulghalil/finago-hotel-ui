interface BookingSectionProps {}
import { useNavigate } from "react-router-dom";
import { setBookedDatesStrings, setHeaderTitle } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BookingDetailsForm from "./BookingDetailsForm";
import GuestInfoForm from "./GuestInfoForm";
import AddOnsForm from "./AddOnsForm";
import ConfirmationForm from "./ConfirmationForm";
import { DayPicker } from "react-day-picker";
import { parseISO } from "date-fns";
import "react-day-picker/dist/style.css";
import { useEffect } from "react";
import { roomApi } from "../../../api/roomService";

function BookingSection({}: BookingSectionProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentStep: string = useAppSelector((state) => state.room.currentStep);
  const bookedDatesStrings = useAppSelector(
    (state) => state.room.bookedDatesStrings,
  );
  const bookedDates = bookedDatesStrings.map((date) => parseISO(date));
  const toBook = useAppSelector((state) => state.room.toBook);
  const getBookedDate = async () => {
    try {
      const params = {
        roomId: toBook.id,
      };
      const bookedDates = await roomApi.getBookedDate(params);
      return bookedDates;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const bookedDates = await getBookedDate();
      dispatch(setBookedDatesStrings(bookedDates));
    };
    initialize();
  }, []);

  const steps = [
    {
      label: "Booking Details",
      index: 1,
    },
    {
      label: "Guest Information",
      index: 2,
    },
    {
      label: "Add-ons",
      index: 3,
    },
    {
      label: "Confirmation",
      index: 4,
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case "Booking Details":
        return <BookingDetailsForm />;
      case "Guest Information":
        return <GuestInfoForm />;
      case "Add-ons":
        return <AddOnsForm />;
      case "Confirmation":
        return <ConfirmationForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="text-end mb-3 pe-3 text-muted pointer">
        <span onClick={() => navigate("/")}>Home / </span>
        <span onClick={() => dispatch(setHeaderTitle("Room"))}>Room / </span>
        <span className="fw-boldest">Booking</span>
      </div>
      <div data-aos="fade-up">
        <div className="section-title mt-4 mb-4">
          <h2 className="fw-boldest text-uppercase text-center">
            Reserve Your Stay
          </h2>
          <p className="text-muted m-0 text-center">
            Experience unmatched hospitality with our streamlined booking
            process
          </p>
        </div>
        <div className="row">
          <div className="col-1 stepper mt-4">
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-left">
                  <div
                    className={`step-icon ${currentStep === step.label || i < steps.findIndex((s) => s.label === currentStep) ? "active" : ""}`}
                  >
                    {i + 1}
                  </div>
                  {i !== steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-content mb-3"></div>
              </div>
            ))}
          </div>
          <div className="col-7 px-0">
            <div className="booking-form py-5 px-4 mb-5">
              <h4 className="fw-boldest">{currentStep}</h4>
              <hr />
              {renderStepContent()}
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end mb-5">
            <div
              className="p-4 shadow-lg bg-white"
              style={{ borderRadius: "25px", width: "fit-content" }}
            >
              <DayPicker
                mode="single"
                modifiers={{
                  booked: bookedDates,
                }}
                modifiersStyles={{
                  booked: {
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                    backgroundColor: "#ffe6e6",
                  },
                }}
              />

              <div className="mt-3 ms-2">
                <small className="text-muted">
                  <span
                    className="badge rounded-pill me-2"
                    style={{
                      border: "0px solid var(--primary-color)",
                      backgroundColor: "#ffe6e6",
                      color: "var(--primary-color)",
                    }}
                  >
                    {" "}
                  </span>
                  Confirmed Bookings
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSection;
