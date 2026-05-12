import AvailableRoom from "./AvailableRoom";
import { useNavigate } from "react-router-dom";

interface RoomSectionProps {}

function RoomSection({}: RoomSectionProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-end mb-3 pe-3 text-muted pointer">
        <span onClick={() => navigate("/")}>Home / </span>
        <span className="fw-boldest">Room</span>
      </div>
      <div className="row filter-card p-3 mb-5 mx-3">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="categoryInput" className="form-label fw-boldest">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryInput"
              placeholder="Select category"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="categoryInput" className="form-label fw-boldest">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryInput"
              placeholder="Select category"
            />
          </div>
        </div>
      </div>
      <AvailableRoom />
    </>
  );
}

export default RoomSection;
