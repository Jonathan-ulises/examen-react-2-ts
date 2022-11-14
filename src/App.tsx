import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MiembroState from "./context/Miembro/MiembroState";
import Home from "./pages/Home";
import Miembros from './pages/Miembros';
import AddMiembro from './pages/AddMiembro';
import EditMiembro from './pages/EditMiembro';

function App() {

  return (
    <>
      <MiembroState>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/miembros" element={<Miembros />} />
            <Route path="/registrar" element={<AddMiembro />} />
            <Route path="/editar/:id" element={<EditMiembro />} />
          </Routes>
        </Router>
      </MiembroState>
    </>
  )
}

export default App
