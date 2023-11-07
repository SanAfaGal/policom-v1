import { useState } from "react";
import { PropTypes } from "prop-types";
import { ComputerImage } from "./ComputerImage";
import { ReservationConfirmation } from "./ReservationConfirmation";
import { updateComputerReservationInLocalStorage } from "../logic/storage";

export function ComputerBooking({ room, computer }) {
  const [reserved, setReserved] = useState(computer.reserved);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (!reserved) {
      setShowModal(true);
    }
  };

  const handleBook = () => {
    updateComputerReservationInLocalStorage(room, computer.id);
    setReserved(!reserved);
    setShowModal(false);
  };

  return (
    <>
      <ComputerImage reserved={reserved} onClick={handleShowModal} />
      {showModal && (
        <ReservationConfirmation
          computerId={computer.id}
          onConfirm={handleBook}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}

ComputerBooking.propTypes = {
  computer: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired
};
