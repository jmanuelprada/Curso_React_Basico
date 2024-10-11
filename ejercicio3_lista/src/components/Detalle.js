
const Detalle = (props) => {

    let contenido
    if (props.data) {
        contenido = <div>
            <h1>{props.data.nombre}</h1>
            <h2>{props.data.edad}</h2>
        </div>
    }

    return (
        <div>
            <h1>Detalle</h1>
            {contenido}
        </div>
    )
}

export default Detalle;
