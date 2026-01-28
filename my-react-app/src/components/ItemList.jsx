const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="container mt-5 text-center">
        <h3 className="alert alert-primary">
            {mensaje}
        </h3>
        </div>
    );
};

export default ItemListContainer;