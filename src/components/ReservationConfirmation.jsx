import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ReservationConfirmation({ computerId, onConfirm, onCancel }) {
    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Confirmación de reserva</Modal.Title>
                <Modal.Body>{computerId}</Modal.Body>
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
    computerId: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};