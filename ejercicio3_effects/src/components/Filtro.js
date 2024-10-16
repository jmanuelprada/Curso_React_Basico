import {useSearchParams} from "react-router-dom";

const Filtro = () => {
    const  [searchParams] = useSearchParams();

    return (
        <div>
            <h1>Filtro</h1>
            Recibe el parámetro: {searchParams.get('id')}
        </div>
    )
}
export default Filtro;
