import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Opening from './pages/Opening';
import Invitation from "./pages/Invitation";
import { useEffect } from "react";
import MusicPlayer from "./components/MusicPlayer";


function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // When the app first loads, redirect if not on "/"
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [])

  return (
    <>

    <MusicPlayer/>
    
    <Routes>
      <Route path="/" element={<Opening/>}/>
      <Route path='/invitation' element={<Invitation/>}/>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
    </>
    
  )
}

export default App