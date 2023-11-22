import './Salas.css'
import { useState } from "react";
import { getFreeRooms } from "../logic";
import { ComputerRoom } from "./ComputerRoom";

export default function AvailableComputerRooms() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    const availableRooms = getFreeRooms();

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
    };

    return (
        <div className="Salas">
            <h2>Salas disponibles</h2>
            <ul className="available-rooms">
                {availableRooms.map((room) => (
                    <li key={room.id}>
                        <button onClick={() => handleRoomClick(room)}>
                            {room.id}
                        </button>
                    </li>
                ))}
            </ul>
            {
                selectedRoom && <ComputerRoom roomSelected={selectedRoom} />
            }
        </div>
    );
}