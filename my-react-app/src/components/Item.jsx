import { Link } from "react-router-dom";

const Item = ({ id, title, price}) => {
    return(
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
            {title}
            </h3>
            <p className="text-gray-600 mb-3">
            ${price}
            </p>
            <Link to={`/item/${id}`} className="inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
            Ver detalles
            </Link>
        </div>
    );
};

export default Item;