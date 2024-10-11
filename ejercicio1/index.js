
const contenedor = document.getElementById('app');
const root = ReactDOM.createRoot(contenedor);

function Saludo(props) {
    return React.createElement(
        'h1',
        {
            className: 'title',
        },
        'Hola ' + props.nombre,
    );
}

const saludo = React.createElement(Saludo, {nombre: 'Jorge'});
root.render(saludo);
