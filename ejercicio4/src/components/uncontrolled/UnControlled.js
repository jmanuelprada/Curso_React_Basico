import {useRef} from "react";

const UnControlled = () => {
    const asunto = useRef();

    const enviar = (event) => {
        event.preventDefault();
        console.log(asunto.current.value);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1>UnControlled</h1>
            </div>

            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="asunto">Asunto</label>
                        <input
                            type="text"
                            name="asunto"
                            className="form-control"
                            ref={asunto}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={(event) => {enviar(event)}}
                    >Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default UnControlled;
