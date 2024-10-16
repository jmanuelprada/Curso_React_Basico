import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const DetalleById = (props) => {
    const  [data, setData] = useState();

    const {id} = useParams();
    console.log('id', id);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://swapi.dev/api/people/' + id;
            const data = await fetch(url, {method: 'GET'});
            const datosProcesados = await data.json();
            console.log(datosProcesados)
            setData(datosProcesados);
        }
        getData()
            .catch(e => console.log(e));
    }, [id]);

    return (
        <div >
            <h2>Detalle por su id {id}</h2>
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
export default DetalleById;
