import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="bg-gray-900 p-5 w-full">
    <div className="w-full max-w-6xl mx-auto flex justify-between items-center">

        <Link
            to="/"
            className="text-white text-2xl font-bold tracking-wide">
            🛍️ Mi Tienda
        </Link>

        <div className="flex gap-6 text-lg">

        <Link
            to="/category/electronics"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Electrónica
        </Link>

        <Link
            to="/category/jewelery"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Joyería
        </Link>

        <Link
            to="/category/men's clothing"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Hombre
        </Link>

        <Link
            to="/category/women's clothing"
            className="text-red-400 visited:text-red-400 hover:text-white transition">
            Mujer
        </Link>

        </div>

    </div>
    </nav>
    );
};

export default NavBar;