import { PropTypes } from "prop-types";
import Image from "react-bootstrap/Image";
import { COMPUTER_STATE } from "../logic/constants";

export function ComputerImage({ reserved, onClick }) {
    return (
        <div className="computer computer-image">
            <Image src={COMPUTER_STATE[reserved]} onClick={onClick} />
        </div>
    );
}

ComputerImage.propTypes = {
    reserved: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};