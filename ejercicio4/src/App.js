
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toggle from "./components/toggle/Toggle";
import {useState} from "react";
import Controlled from "./components/controlled/Controlled";
import UnControlled from "./components/uncontrolled/UnControlled";
import Formik from "./components/formik/Formik";

function App() {
    const [tipoControlado, setTipoControlado] = useState(true);

    const recibeClick = (valorRecibido) => {
        setTipoControlado(valorRecibido);
    }

    return (
        <div className="App"  >
            <Toggle
                label="Tipo de formulario"
                opcion1="Controlado"
                opcion2="no controlado"
                ejecutaClick={recibeClick}
                valorInicial={tipoControlado}
            />
            {
                tipoControlado ?
                    <Formik />
                    :
                    <UnControlled />
            }
        </div>
    );
}

export default App;
