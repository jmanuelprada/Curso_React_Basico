import styles from './Item.module.css';
import {useNavigate} from "react-router-dom";

const Item = (props) => {
    const navigate = useNavigate();

    const abrirPorId = () => {
        const id = props.data.url.split('people/')[1];
        navigate('/lista/' + id);
    }

    return (
        <li className={styles.item}>
            {props.children}
            <h3>{props.data.name}</h3>
            <br/>
            Gender: {props.data.gender}
            <button onClick={abrirPorId}>Ver por id</button>
        </li>
    )
}
export default Item;
