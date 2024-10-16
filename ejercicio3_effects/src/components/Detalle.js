import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Detalle = (props) => {
    const  [data, setData] = useState();

    const location = useLocation();
    const stateData = location.state.data;
    console.log('Personaje', location.state.data)

    useEffect(() => {
        setData(stateData);
    }, [stateData]);

    return (
        <div >
            <h2>Detalle</h2>
            {
                data ?
                    <>
                        <p>Name: {data.name}</p>
                        <p>Gender: {data.gender}</p>
                        <p>height: {data.height}</p>
                    </>
                    :
                    <h3>Cargando datos</h3>
            }
        </div>
    )
}
export default Detalle;
