import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(1);

    return (
        <div className="p-2 m-0 flex justify-center items-center gap-4">
            <button onClick={() => setCount(count -1)} disabled={count <= 1} className="bg-gray-300 w-5 rounded-md hover:bg-gray-500">-</button>
            <span>{count}</span>
            <button onClick={() => setCount (count +1)} className="bg-gray-300 w-5 rounded-md hover:bg-gray-500">+</button>
        </div>
    )
}

export default ItemCount;