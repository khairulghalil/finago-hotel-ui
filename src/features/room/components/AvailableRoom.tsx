import AvailableRoomCard from "./AvailableRoomCard";
import { useAppSelector } from "../../../store/hooks";

interface AvailableRoomProps {
  checkInDate?: string;
  checkOutDate?: string;
}

function AvailableRoom({ checkInDate, checkOutDate }: AvailableRoomProps) {
  const data = useAppSelector((state) => state.room.data);
  return (
    <>
      <div className="row row-cols-3 g-4 justify-content-center mb-5 text-center">
        {data.map((room) => (
          <AvailableRoomCard
            key={room.id}
            {...room}
            checkInDate={checkInDate || ""}
            checkOutDate={checkOutDate || ""}
          />
        ))}
      </div>
    </>
  );
}

export default AvailableRoom;
