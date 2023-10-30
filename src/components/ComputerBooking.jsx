import { useState } from "react";
import { PropTypes } from "prop-types";
import { ComputerImage } from "./ComputerImage";
import { ReservationConfirmation } from "./ReservationConfirmation";
import { updateComputerReservationInLocalStorage } from "../logic/storage";

export function ComputerBooking({ computer }) {
  const [reserved, setReserved] = useState(computer.reserved);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (!reserved) {
      setShowModal(true);
    }
  };

  const handleBook = () => {
    updateComputerReservationInLocalStorage(computer.id);
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
  computer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
