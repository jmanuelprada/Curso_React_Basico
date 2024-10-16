
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App"  >
      <Toggle
          label="Tipo de formulario"
          opcion1="Controlado"
          opcion2="no controlado"
      />
    </div>
  );
}

export default App;
