import { Link } from "react-router-dom";

function Opening() {
    return (
        <div>
            <li>
                <Link to="/invitation">Go to Invitation</Link>
            </li>
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