import {useFormik} from "formik";

const Formik = () => {
    const formik = useFormik({
       initialValues: {
           asunto: 'asunto inicial',
           mensaje: 'mensaje inicial',
           userId: 2,
       },
        onSubmit: values => {
           console.log(values);
        },
        validate: values => {

        }
    });

    return (
        <div>
            <div>
                <div className='card'>
                    <div className="card-header">
                        <h1>Formik</h1>
                    </div>
                    <div className="card-body">
                        <form
                            className='formulario'
                        >
                            <div className='form-group'>
                                <label htmlFor="asunto">Asunto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={formik.values.asunto}
                                    onChange={formik.handleChange}
                                    name="asunto"
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea
                                    className='form-control'
                                    value={formik.values.mensaje}
                                    onChange={formik.handleChange}
                                    name="mensaje"
                                ></textarea>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="userId">User id</label>
                                <select
                                    value={formik.values.userId}
                                    onChange={formik.handleChange}
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
                                disabled={!formik.isValid}
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
export default Formik;
