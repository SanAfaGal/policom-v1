import { useComputerData } from '../hooks/useComputerData';
import { ComputerBooking } from './ComputerBooking';

export function Room() {
    const computers = useComputerData();

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
