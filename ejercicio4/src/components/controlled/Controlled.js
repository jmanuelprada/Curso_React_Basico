import {useState} from "react";

const Controlled = () => {
    const [mensaje, setMensaje] = useState({
        asunto: '',
        mensaje: '',
        userId: 1,
    });
    const [errores, setErrores] = useState({
        asunto: '',
        mensaje: '',
    });

    const validarCampo = (propiedad, valor) => {
        const newErrores = {...errores};
        switch (propiedad) {
            case 'asunto':
                if (!valor || valor === '') {
                    newErrores[propiedad] = 'El valor de asunto es obligatorio';
                } else {
                    newErrores[propiedad] = '';
                }
                break;
            case 'mensaje':
                if (!valor || valor === '') {
                    newErrores[propiedad] = 'El valor de mensaje es obligatorio';
                } else if (valor.length < 10) {
                    newErrores[propiedad] = 'El mensaje debe tener más de 10 caracteres';
                } else {
                    newErrores[propiedad] = '';
                }
                break;
        }

        setErrores(newErrores);
    }

    const handleChange = (event) => {
        const nuevoMensaje = {...mensaje};
        const name = event.target.name;
        nuevoMensaje[name] = event.target.value;
        setMensaje(nuevoMensaje);
        validarCampo(name, event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(mensaje);
    }

    return (
        <div>
            <div>
                <div className='card'>
                    <div className="card-header">
                        <h1>Controlled</h1>
                    </div>
                    <div className="card-body">
                        <form
                            className='formulario'
                            onSubmit={handleSubmit}
                        >
                            <div className='form-group'>
                                <label htmlFor="asunto">Asunto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={mensaje.asunto}
                                    onChange={handleChange}
                                    name="asunto"
                                />
                            </div>
                            {
                                errores.asunto !== '' ?
                                    <div className="alert alert-danger my-3">{errores.asunto}</div>
                                    :
                                    null
                            }
                            <div className='form-group'>
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea
                                    className='form-control'
                                    value={mensaje.mensaje}
                                    onChange={handleChange}
                                    name="mensaje"
                                ></textarea>
                            </div>
                            {
                                errores.mensaje !== '' ?
                                    <div className="alert alert-danger my-3">{errores.mensaje}</div>
                                    :
                                    null
                            }
                            <div className='form-group'>
                                <label htmlFor="userId">User id</label>
                                <select
                                    value={mensaje.userId}
                                    onChange={handleChange}
                                    name="userId"
                                >
                                    <option value="1">Carmen</option>
                                    <option value="2">Claudia</option>
                                    <option value="3">Jorge</option>
                                    <option value="4">David</option>
                                </select>
                            </div>
                            <button
                                className="btn btn-primary my-2"
                                type="submit"
                                disabled={errores.asunto !== '' || errores.mensaje !== ''}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Controlled;
