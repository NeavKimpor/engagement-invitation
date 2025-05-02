import { Link } from "react-router-dom";
import './OpeningButton.css'

function OpeningButton() {
    return (
        <button className="open-button">
            <Link to="/invitation">បើកធៀប</Link>
        </button>
    )
}

export default OpeningButton;