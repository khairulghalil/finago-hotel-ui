import AvailableRoom from "./AvailableRoom";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { setStayPeriod } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface RoomSectionProps {}

function RoomSection({}: RoomSectionProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const stayPeriod = useAppSelector((state) => state.room.stayPeriod);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="text-end mb-3 pe-3 text-muted pointer">
        <span onClick={() => navigate("/")}>Home / </span>
        <span className="fw-boldest">Room</span>
      </div>
      <div className="row filter-card p-3 mb-5 mx-3">
        <div className="col-md-4">
          <div
            className="mb-3"
            ref={calendarRef}
            style={{ position: "relative" }}
          >
            <label className="form-label fw-boldest">Stay Period</label>
            <input
              type="text"
              className="form-control"
              value={`${format(new Date(stayPeriod[0].startDate), "dd/MM/yyyy")} - ${format(new Date(stayPeriod[0].endDate), "dd/MM/yyyy")}`}
              onClick={() => setShowCalendar(!showCalendar)}
              readOnly
              style={{ cursor: "pointer" }}
            />
            {showCalendar && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 1000,
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  marginTop: "5px",
                }}
              >
                <DateRange
                  ranges={stayPeriod.map((period) => ({
                    startDate: new Date(period.startDate),
                    endDate: new Date(period.endDate),
                    key: period.key,
                  }))}
                  onChange={(item: any) => {
                    const startDate = item.selection.startDate;
                    let endDate = item.selection.endDate;

                    if (startDate.toDateString() === endDate.toDateString()) {
                      endDate = new Date(startDate);
                      endDate.setDate(endDate.getDate() + 1);
                    }

                    dispatch(
                      setStayPeriod([
                        {
                          startDate: startDate.toISOString(),
                          endDate: endDate.toISOString(),
                          key: item.selection.key,
                        },
                      ]),
                    );
                  }}
                  minDate={new Date()}
                  rangeColors={["#0d6efd"]}
                  direction="horizontal"
                />
              </div>
            )}
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
      <AvailableRoom
        checkInDate={format(new Date(stayPeriod[0].startDate), "dd/MM/yyyy")}
        checkOutDate={format(new Date(stayPeriod[0].endDate), "dd/MM/yyyy")}
      />
    </>
  );
}

export default RoomSection;
