import PropTypes from 'prop-types';
import { getComputers } from '../logic';
import { ComputerBooking } from './ComputerBooking';

export function ComputerRoom({ roomSelected }) {
    const computers = getComputers(roomSelected)

    return (
        <>
            <h2>Sala seleccionada: {roomSelected.id}</h2>

            <ul className="computers">
                {computers.map((computer) => (
                    <li className="computer-container" key={computer.id}>
                        <ComputerBooking room={roomSelected} computer={computer} />
                        <span className='computer-id'>{computer.id}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

ComputerRoom.propTypes = {
    roomSelected: PropTypes.object.isRequired
};