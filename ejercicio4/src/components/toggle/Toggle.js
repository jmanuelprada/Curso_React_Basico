import styles from './toggle.module.scss';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const Toggle = (props) => {
    const [activo, setActivo] = useState();

    const handleClick = () => {
        const nuevoValor = !activo;
        setActivo(nuevoValor);
        props.ejecutaClick(nuevoValor);
    }

    useEffect(() => {
        setActivo(props.valorInicial);
    }, [props.valorInicial]);

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



Toggle.defaultProps = {
    valorInicial: true,
}

Toggle.propTypes = {
    label: PropTypes.string.isRequired,
    opcion1: PropTypes.string.isRequired,
    opcion2: PropTypes.string.isRequired,
    ejecutaClick: PropTypes.func.isRequired,
    valorInicial: PropTypes.bool,
}

export default Toggle;
