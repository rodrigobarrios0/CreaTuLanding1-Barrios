import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map(prod => (
                <Item key={prod.id} {...prod}/>
            ))}
        </div>
    );
};

export default ItemList;