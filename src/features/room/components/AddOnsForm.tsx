import { setCurrentStep, setToBook } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface AddOnsFormProps {}

function AddOnsForm({}: AddOnsFormProps) {
  const dispatch = useAppDispatch();
  const toBook = useAppSelector((state) => state.room.toBook);

  const handleInputChange = (field: string, value: any) => {
    let updatedPrice = toBook.price;

    if (value === true) {
      updatedPrice = toBook.price + 20 * toBook.totalNights;
    } else {
      updatedPrice = toBook.price - 20 * toBook.totalNights;
    }

    dispatch(
      setToBook({
        ...toBook,
        addOns: {
          ...toBook.addOns,
          [field]: value,
        },
        price: updatedPrice,
      }),
    );
  };
  return (
    <>
      <form>
        <span className="badge rounded-pill px-3 py-2">
          <i className="bi bi-tag-fill me-2"></i>
          Limited Time Promotion: Each for **RM 20** only!
        </span>
        <div className="mb-2 ps-4 mt-4">
          <input
            type="checkbox"
            className="form-check-input shadow-none me-3"
            id="breakfastInput"
            checked={toBook?.addOns?.breakfast || false}
            onChange={(e) => handleInputChange("breakfast", e.target.checked)}
          />
          <label htmlFor="breakfastInput" className="form-label fw-boldest">
            Breakfast
          </label>
        </div>
        <div className="mb-2 ps-4">
          <input
            type="checkbox"
            className="form-check-input shadow-none me-3"
            id="spaTreatmentInput"
            checked={toBook?.addOns?.spa || false}
            onChange={(e) => handleInputChange("spa", e.target.checked)}
          />
          <label htmlFor="spaTreatmentInput" className="form-label fw-boldest">
            Spa Treatment
          </label>
        </div>
        <div className="mb-2 ps-4">
          <input
            type="checkbox"
            className="form-check-input shadow-none me-3"
            id="airportTransferInput"
            checked={toBook?.addOns?.airportTransfer || false}
            onChange={(e) =>
              handleInputChange("airportTransfer", e.target.checked)
            }
          />
          <label
            htmlFor="airportTransferInput"
            className="form-label fw-boldest"
          >
            Airport Transfer
          </label>
        </div>
      </form>
      <div className="text-end" style={{ marginTop: "9px" }}>
        <button
          className="btn btn-secondary shadow-none mt-2 px-4 me-2"
          onClick={() => dispatch(setCurrentStep("Guest Information"))}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-primary shadow-none mt-2 px-4"
          onClick={() => dispatch(setCurrentStep("Confirmation"))}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default AddOnsForm;
