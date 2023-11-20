import { useState } from "react";
import { PropTypes } from "prop-types";
import { ReservationConfirmation } from "./ReservationConfirmation";

// import { updateComputerReservationInLocalStorage } from "../logic/storage";

export function RoomBooking({ room }) {
  const [reserved, setReserved] = useState(room.reserved);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (!reserved) {
      setShowModal(true);
    }
  };

  const handleBook = () => {
    // updateRoomReservationInLocalStorage(room);
    setReserved(!reserved);
    setShowModal(false);
  };

  return (
    <>
      <li>
        <p>Sala: {room.id}</p>
        <p>Capacidad: {room.capacity}</p>
        <button onClick={handleShowModal}>
          Reservar
        </button>
      </li>

      {showModal && (
        <ReservationConfirmation
          type='Sala'
          id={room.id}
          onConfirm={handleBook}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}

RoomBooking.propTypes = {
  room: PropTypes.object.isRequired
};
