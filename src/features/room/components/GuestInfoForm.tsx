import { setCurrentStep, setToBook } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface GuestInfoFormProps {}

function GuestInfoForm({}: GuestInfoFormProps) {
  const dispatch = useAppDispatch();
  const toBook = useAppSelector((state) => state.room.toBook);

  const handleInputChange = (field: string, value: string) => {
    dispatch(
      setToBook({
        ...toBook,
        [field]: value,
      }),
    );
  };
  return (
    <>
      <form>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="nameInput" className="form-label fw-boldest">
              Name
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="nameInput"
              placeholder="Enter your name"
              value={toBook.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="emailInput" className="form-label fw-boldest">
              Email Address
            </label>
            <input
              type="email"
              className="form-control shadow-none"
              id="emailInput"
              placeholder="Enter your email address"
              value={toBook.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="icNumberInput" className="form-label fw-boldest">
              IC Number
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="icNumberInput"
              placeholder="Enter your IC number"
              value={toBook.ic}
              onChange={(e) => handleInputChange("ic", e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="phoneNumberInput" className="form-label fw-boldest">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control shadow-none"
              id="phoneNumberInput"
              placeholder="Enter your phone number"
              value={toBook.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </form>
      <div className="text-end">
        <button
          className="btn btn-secondary shadow-none mt-3 px-4 me-2"
          onClick={() => dispatch(setCurrentStep("Booking Details"))}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-primary shadow-none mt-3 px-4"
          onClick={() => dispatch(setCurrentStep("Add-ons"))}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default GuestInfoForm;
