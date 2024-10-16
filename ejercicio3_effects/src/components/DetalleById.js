import {useParams} from "react-router-dom";
import {useEffect} from "react";

const DetalleById = (props) => {
    const {id} = useParams();
    console.log('id', id);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://swapi.dev/api/people/' + id;
            const data = await fetch(url, {method: 'GET'});
            const datosProcesados = await data.json();
            console.log(datosProcesados)
        }
        getData()
            .catch(e => console.log(e));
    }, [id]);

    return (
        <div >
            <h2>Detalle por su id {id}</h2>

        </div>
    )
}
export default DetalleById;
