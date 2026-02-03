import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="bg-gray-900 p-5 w-full">
    <div className="w-full max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo/inicio */}
        <Link
            to="/"
            className="text-white text-2xl font-bold tracking-wide">
            Inicio
        </Link>

        {/* Links de navegación */}
        <div className="flex gap-6 text-lg">

        <Link
            to="/category/remeras"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Remeras
        </Link>

        <Link
            to="/category/buzos"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Buzos
        </Link>

        </div>

    </div>
    </nav>
    );
};

export default NavBar;