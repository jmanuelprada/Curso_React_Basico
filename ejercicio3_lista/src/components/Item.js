import {useState} from "react";

const Item = (props) => {
    const [comprimido, setComprimido] = useState(true);

    let otrosDatos;
    if (!comprimido) {
        otrosDatos = <p>{props.data.edad} - {props.data.color}</p>
    }

    return (
        <li>
            <h3>{props.data.nombre}</h3>
            {otrosDatos}
            <button>Ver detalle</button>
        </li>
    )
}
export default Item;
