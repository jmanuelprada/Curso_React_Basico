import {useEffect, useState} from "react";
import Item from "./Item";
import UsuariosLista from "./UsuariosLista";

const Lista = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const url = 'https://swapi.dev/api/people';
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then((response) => {
                setPersonajes(response.results);
                console.log(response);
            })
            .catch(e => {
                console.error('Error en el request', e);
            })


    }, []);

    const handleClick = (name) => {
        console.log(name);
    }

    const objectosPersonaje = personajes.map((personaje, index) => {
        return <Item key={index} data={personaje} >
            <button onClick={() => {handleClick(personaje.name)}}>Selecciona</button>
        </Item>
    })

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {objectosPersonaje}
            </ul>
        </div>
    )
}
export default Lista;
