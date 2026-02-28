import { useState } from "react";

const ItemCount = ({ onAddToCart }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (onAddToCart) {
            onAddToCart(count);
        }
        setCount(1);
    };

    return (
        <div className="p-4 flex items-center gap-4 mb-4">
            <button 
                onClick={() => setCount(count - 1)} 
                disabled={count <= 1} 
                className="bg-gray-300 w-8 h-8 rounded hover:bg-gray-500 disabled:opacity-50">
                -
            </button>
            <span className="text-lg font-semibold">{count}</span>
            <button 
                onClick={() => setCount(count + 1)} 
                className="bg-gray-300 w-8 h-8 rounded hover:bg-gray-500">
                +
            </button>
        </div>
    );
};

export default ItemCount;