import styles from './toggle.module.scss';
import PropTypes from "prop-types";
import {useState} from "react";

const Toggle = (props) => {
    const [activo, setActivo] = useState(true);

    const handleClick = () => {
        const nuevoValor = !activo;
        setActivo(nuevoValor);
    }

    const getClasses = () => {
        const color = activo ? 'btn-success' : 'btn-primary';
        return 'btn mx-2 ' + color;
    }

    return (
        <div className={styles.toggle}>
            <span className={styles.label}>{props.label}</span>
            <button onClick={handleClick} className={getClasses()}>
                {
                    activo ? props.opcion1 : props.opcion2
                }
            </button>
        </div>
    )
}

Toggle.propTypes = {
    label: PropTypes.string.isRequired,
    opcion1: PropTypes.string.isRequired,
    opcion2: PropTypes.string.isRequired,
}

export default Toggle;
