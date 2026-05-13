import AvailableRoom from "./AvailableRoom";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { setStayPeriod, setRoomTypeSelected } from "../roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Select from "react-select";

interface RoomSectionProps {}

function RoomSection({}: RoomSectionProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const stayPeriod = useAppSelector((state) => state.room.stayPeriod);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const options = useAppSelector((state) => state.room.roomTypeOpt);
  const roomTypeSelected = useAppSelector(
    (state) => state.room.roomTypeSelected,
  );

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
            <Select
              options={options}
              placeholder="Select category"
              value={options.find(
                (option) => option.value === roomTypeSelected,
              )}
              onChange={(selectedOption) => {
                console.log("Selected option:", selectedOption);
                if (selectedOption) {
                  dispatch(setRoomTypeSelected(selectedOption.value));
                }
              }}
              styles={{
                control: (base, state) => ({
                  ...base,
                  minHeight: "38px",
                  borderRadius: "0.375rem",
                  border: state.isFocused
                    ? "1px solid #86b7fe"
                    : "1px solid #dee2e6",
                  boxShadow: state.isFocused
                    ? "0 0 0 0.25rem rgba(13, 110, 253, 0.25)"
                    : "none",
                  "&:hover": {
                    borderColor: state.isFocused ? "#86b7fe" : "#dee2e6",
                  },
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: "0.375rem 0.75rem",
                }),
                input: (base) => ({
                  ...base,
                  margin: 0,
                  padding: 0,
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: "0 0.75rem",
                }),
              }}
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
