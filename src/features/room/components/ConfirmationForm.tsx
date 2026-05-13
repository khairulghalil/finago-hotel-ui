import { setCurrentStep, setHeaderTitle } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface ConfirmationFormProps {}

function ConfirmationForm({}: ConfirmationFormProps) {
  const dispatch = useAppDispatch();
  const toBook = useAppSelector((state) => state.room.toBook);

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
            dispatch(setHeaderTitle("Room"));
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}

export default ConfirmationForm;
