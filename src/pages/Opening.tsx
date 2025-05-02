import { Link } from "react-router-dom";
import OpeningButton from "../components/OpeningButton";
import "./Opening.css"

function Opening() {
    return (
        <div className="opening-page flex flex-col items-center">
            <h1 className="sub-title">សូមគោរពអញ្ជើញ</h1>
            <h1 className="title">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
            <OpeningButton/>
        </div>
    )
}

export default Opening;

{/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/invitation">Invitation</Link>
        </li>
      </ul>
    </nav> */}