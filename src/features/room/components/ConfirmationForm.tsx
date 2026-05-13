import { setCurrentStep } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { roomApi } from "../../../api/roomService";

interface ConfirmationFormProps {}

function ConfirmationForm({}: ConfirmationFormProps) {
  const dispatch = useAppDispatch();
  const toBook = useAppSelector((state) => state.room.toBook);

  const createBooking = async () => {
    try {
      const bookingResponse = await roomApi.createBooking(toBook);
      return bookingResponse;
    } catch (error) {
      return null;
    }
  };

  const handleConfirm = async () => {
    const bookingResponse = await createBooking();
    if (bookingResponse) {
      location.reload();
    } else {
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <>
      <form>
        <p className="text-muted mt-4">
          Please make sure all the details are correct before you proceed to
          confirm your booking.
        </p>
        <p className="text-muted mb-4">
          Once confirmed, your reservation will be processed. If you need to
          make any changes, you can go back to the previous steps.
        </p>
        <h4>Total : RM {toBook?.totalPrice || 0}</h4>
      </form>
      <div className="text-end" style={{ marginTop: "10px" }}>
        <button
          className="btn btn-secondary shadow-none mt-0 px-4 me-2"
          onClick={() => dispatch(setCurrentStep("Add-ons"))}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-primary shadow-none mt-0 px-4"
          onClick={() => {
            handleConfirm();
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}

export default ConfirmationForm;
