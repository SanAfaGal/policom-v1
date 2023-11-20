/* eslint-disable react/prop-types */

import { getFreeRooms } from "../logic";
import { useAuth0 } from "@auth0/auth0-react";
import { determineEmailType } from "../logic";
import { RoomBooking } from "./RoomBooking";

export default function AvailableRooms() {
    const availableRooms = getFreeRooms();

    const { user } = useAuth0();
    const userRole = determineEmailType(user.email);
    const isTeacher = userRole === 'Teacher';

    return (
        <>
            {isTeacher ? (

                <div>
                    <h2>Salas disponibles</h2>
                    <ul className="available-rooms">
                        {availableRooms.map((room) => (
                            <RoomBooking
                                key={room.id}
                                room={room}
                            />
                        ))}
                    </ul>
                </div>

            ) : (
                <p>No tienes permisos para reservar salas</p>
            )}
        </>
    );
}