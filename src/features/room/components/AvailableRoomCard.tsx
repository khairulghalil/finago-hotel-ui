import { setHeaderTitle, setCurrentStep, setToBook } from "../roomSlice";
import { initialToBookState } from "../constants";
import { useAppDispatch } from "../../../store/hooks";
import { differenceInDays, parse } from "date-fns";

interface AvailableRoomCardProps {
  id: string;
  img: string;
  roomType: string;
  description: string;
  size: string;
  bedType: string;
  roomNumber: string;
  price: number;
  checkInDate?: string;
  checkOutDate?: string;
}

function AvailableRoomCard({
  id,
  img,
  roomType,
  description,
  size,
  bedType,
  roomNumber,
  price,
  checkInDate,
  checkOutDate,
}: AvailableRoomCardProps) {
  const dispatch = useAppDispatch();

  const handleBookNow = () => {
    const arrival = parse(checkInDate || "", "dd/MM/yyyy", new Date());
    const departure = parse(checkOutDate || "", "dd/MM/yyyy", new Date());
    const totalNights = differenceInDays(departure, arrival);
    const totalPrice = price * (totalNights > 0 ? totalNights : 0);

    dispatch(setHeaderTitle("Booking"));
    dispatch(setCurrentStep("Booking Details"));
    dispatch(
      setToBook({
        ...initialToBookState,
        id,
        roomType,
        roomNumber,
        totalPrice: totalPrice,
        checkInDate: checkInDate || "",
        checkOutDate: checkOutDate || "",
        totalNights: totalNights,
      }),
    );
  };

  return (
    <>
      <div className="col px-4">
        <div className="card text-start mb-5">
          <div className="card-body p-0">
            <img src={img} alt={roomType} className="img-fluid card-img-top" />
            <div className="p-3">
              <h5 className="card-title fw-boldest my-2 d-flex align-items-center justify-content-between">
                {roomType}
                <span className="small text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </span>
              </h5>
              <p className="card-text text-muted">{description}</p>

              <span className="room-details mb-3 d-block">
                <p>
                  <span className="title-details">Room Number :</span>{" "}
                  {roomNumber}
                </p>
              </span>
              <span className="badge bg-success me-2">Available</span>
              <span className="badge bg-primary me-2">{size}</span>
              <span className="badge bg-warning me-2">{bedType}</span>

              <div className="d-flex room-price mt-3">
                <h3>
                  RM{price}
                  <span className="text-muted">/ night</span>
                </h3>
                <button
                  className="btn btn-primary ms-auto px-4"
                  onClick={() => handleBookNow()}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableRoomCard;
