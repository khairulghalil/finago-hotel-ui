import AvailableRoomCard from "./AvailableRoomCard";
import { useAppSelector } from "../../../store/hooks";

interface AvailableRoomProps {}

function AvailableRoom({}: AvailableRoomProps) {
  const data = useAppSelector((state) => state.room.data);
  console.log(data);

  return (
    <>
      <div className="row row-cols-3 g-4 justify-content-center mb-5 text-center">
        {data.map((room) => (
          <AvailableRoomCard key={room.id} {...room} />
        ))}
      </div>
    </>
  );
}

export default AvailableRoom;
