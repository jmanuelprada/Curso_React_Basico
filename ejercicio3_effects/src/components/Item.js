import styles from './Item.module.css';
import {createSearchParams, useNavigate} from "react-router-dom";

const Item = (props) => {
    const navigate = useNavigate();

    const abrirPorId = () => {
        const id = props.data.url.split('people/')[1];
        navigate('/lista/' + id);
    }

    const abrirenviandoObjeto = () => {
        const options = {
            state: {
                data: props.data,
            }
        }
        navigate('/lista/detalle', options);
    }

    const abrirPorFiltro = () => {
        const _id = props.data.url.split('people/')[1];
        const id = _id.split('/')[0];
        navigate({
            pathname: 'filtro',
            search: createSearchParams({
                id: id,
                lang: 'es',
            }).toString(),
        });
    }

    return (
        <li className={styles.item}>
            {props.children}
            <h3>{props.data.name}</h3>
            <br/>
            Gender: {props.data.gender}
            <button onClick={abrirPorId}>Ver por id</button>
            <button onClick={abrirenviandoObjeto}>Ver enviando objeto</button>
            <button onClick={abrirPorFiltro}>Ver enviando filtro</button>
        </li>
    )
}
export default Item;
