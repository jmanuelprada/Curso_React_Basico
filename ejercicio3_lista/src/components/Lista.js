import Item from "./Item";
import Detalle from "./Detalle";
import {useState} from "react";

const Lista = (props) => {
    const [objetoDetalle, setObjetoDetalle] = useState();

    const renderUsuarios = () => {
        return props.data.map((usuario, index) => {
            return <Item key={index} data={usuario} handleDetalle={guardaDetalle}></Item>
        });
    }

    const guardaDetalle = (data) => {
        setObjetoDetalle(data);
    }

    return (
        <div>
            <h1>Lista</h1>
            <div>
                <ul>
                    {renderUsuarios()}
                </ul>
            </div>

            <div>
                <Detalle data={objetoDetalle}/>
            </div>
        </div>
    )
}

export default Lista;
