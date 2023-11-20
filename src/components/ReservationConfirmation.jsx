import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ReservationConfirmation({ type, id, onConfirm, onCancel }) {
    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Confirmación de reserva</Modal.Title>
                <Modal.Body>{type} {id}</Modal.Body>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="danger" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={onConfirm}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ReservationConfirmation.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};