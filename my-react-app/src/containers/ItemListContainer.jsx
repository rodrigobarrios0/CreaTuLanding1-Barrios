import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductByCategory, getProductById } from "../data/products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const{ categoryId } = useParams();

useEffect(() => {
    const fetchData = async () => {
        if(categoryId) {
        const data=await getProductByCategory(categoryId);
        setItems (data);
        } else { 
            const data = await getProducts();
            setItems (data);
        }
    };
    fetchData();
}, [categoryId]);

return <ItemList items={items} />;
};

export default ItemListContainer;