import ItemCount from "./ItemCount";

const ItemDetail = ({ title, description, price }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount  />
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Comprar
            </button>
        </div>
    );
};

export default ItemDetail;