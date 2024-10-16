import {Link, Outlet} from "react-router-dom";

const Usuarios = () => {
    return (
        <div>
            <h2>Usuarios</h2>
            <nav>
                <ul>
                    <li><Link to="lista">lista</Link></li>
                    <li><Link to="new">new</Link></li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}
export default Usuarios;
