import { Link, Route, Routes } from "react-router-dom";
import Opening from './pages/Opening';
import Invitation from "./pages/Invitation";


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/invitation">Invitation</Link>
        </li>
      </ul>
    </nav>


    <Routes>
      <Route path="/" element={<Opening/>}/>
      <Route path='/invitation' element={<Invitation/>}/>
    </Routes>
    </>
    
  )
}

export default App