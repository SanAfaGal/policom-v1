import { useState } from "react";
import { getComputers, getFreeRooms } from "../logic";
import { ComputerRoom } from "./ComputerRoom";

function AvailableRoomsList() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    const availableRooms = getFreeRooms(selectedRoom);

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        getComputers(room)
    };

    return (
        <div>
            <h2>Salas disponibles</h2>
            <ul>
                {availableRooms.map((room) => (
                    <li key={room.id}>
                        <button onClick={() => handleRoomClick(room)}>
                            {room.id}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedRoom && <ComputerRoom />}
        </div>
    );
}

export default AvailableRoomsList;
