import { setCurrentStep, setToBook } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import toast, { Toaster } from "react-hot-toast";

interface GuestInfoFormProps {}

function GuestInfoForm({}: GuestInfoFormProps) {
  const dispatch = useAppDispatch();
  const toBook = useAppSelector((state) => state.room.toBook);

  const formValidation = () => {
    let errMessage = "";
    // TODO : uncomment this for validation
    // if (!toBook.name || !toBook.email || !toBook.ic || !toBook.phone) {
    //   errMessage = "Please fill in all the required fields.";
    // } else if (!/\S+@\S+\.\S+/.test(toBook.email)) {
    //   errMessage = "Please enter a valid email address.";
    // } else if (!/^\d{6}-\d{2}-\d{4}$/.test(toBook.ic)) {
    //   errMessage =
    //     "Please enter a valid IC number in this format xxxxxx-xx-xxxx.";
    // } else if (!/^\+\d+$/.test(toBook.phone)) {
    //   errMessage =
    //     "Please enter a valid phone number in this format +xxxxxxxxxxx.";
    // } else {
    //   dispatch(setCurrentStep("Add-ons"));
    // }
    dispatch(setCurrentStep("Add-ons"));

    if (errMessage) {
      toast.error(errMessage, {
        style: {
          borderRadius: "15px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

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
      <Toaster />
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
              required
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
              required
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
              required
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
              required
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
          onClick={() => formValidation()}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default GuestInfoForm;
