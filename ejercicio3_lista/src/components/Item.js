import {useState} from "react";

const Item = (props) => {
    const [comprimido, setComprimido] = useState(true);

    const handleclick = () => {
        const nuevoValor = !comprimido;
        setComprimido(nuevoValor);
    }

    const seleccionar = (data) => {
        props.handleDetalle(data);
    }

    let otrosDatos;
    if (!comprimido) {
        otrosDatos = <div>
            <p>{props.data.edad} - {props.data.color}</p>
            <button onClick={() => {seleccionar(props.data)}}>Seleccionar</button>
        </div>

    }

    return (
        <li>
            <h3>{props.data.nombre}</h3>
            {otrosDatos}
            <button onClick={handleclick}>Ver detalle</button>
        </li>
    )
}
export default Item;
