
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Lista from "./components/Lista";
import Usuarios from "./components/Usuarios";
import UsuariosLista from "./components/UsuariosLista";
import UsuariosNew from "./components/UsuariosNew";
import Detalle from "./components/Detalle";
import DetalleById from "./components/DetalleById";

function App() {
    return (
        <div className="App">
            <h1>Ejercicio effects y rutas</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/lista">Lista</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="lista">
                        <Route index element={<Lista />}></Route>
                        <Route path="detalle" element={<Detalle />}></Route>
                        <Route path=":id" element={<DetalleById />}></Route>
                    </Route>
                    <Route path="usuarios" element={<Usuarios/>} >
                        <Route path="lista" element={<UsuariosLista />}></Route>
                        <Route path="new" element={<UsuariosNew />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
