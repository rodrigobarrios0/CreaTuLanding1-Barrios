import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
    return (
        <Link to={`/item/${id}`} className="no-underline">
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <img
                    src={image}
                    alt={title}
                    className="h-40 mx-auto object-contain mb-3"
                />

                <h3 className="text-sm font-semibold line-clamp-2">
                    {title}
                </h3>

                <p className="font-bold mt-2 text-green-600">
                    ${price}
                </p>

                <p className="text-blue-600 mt-2 text-sm">
                    Ver detalles →
                </p>
            </div>
        </Link>
    );
};

export default Item;