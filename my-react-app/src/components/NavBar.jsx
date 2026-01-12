import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <a className="navbar-brand" href="#">
            Mi Tienda
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" href="#">
                Inicio
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Productos
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Contacto
                </a>
            </li>
            </ul>

            <CartWidget />
        </nav>
        );
};

export default NavBar;