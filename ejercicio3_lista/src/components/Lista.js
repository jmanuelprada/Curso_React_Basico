import Item from "./Item";

const Lista = (props) => {

    const renderUsuarios = () => {
        return props.data.map((usuario, index) => {
            return <Item key={index} data={usuario}></Item>
        });
    }

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {renderUsuarios()}
            </ul>
        </div>
    )
}

export default Lista;
