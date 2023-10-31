import { getComputersFromLocalStorage } from '../logic/storage';
import { ComputerBooking } from './ComputerBooking';

export function ComputerRoom() {
    const computers = getComputersFromLocalStorage();

    return (
        <ul className="computers">
            {computers.map((computer) => (
                <li className="computer" key={computer.id}>
                    <ComputerBooking computer={computer} />
                </li>
            ))}
        </ul>
    );
}
