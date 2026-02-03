const products = [
{
    id: "1",
    title: "Remera roja",
    price: 15000,
    category: "remeras",
    description: "Remera roja cómoda y fresca"
},
{
    id: "2",
    title: "Remera azul",
    price: 14000,
    category: "remeras",
    description: "Remera azul cómoda y fresca"
},
{
    id: "3",
    title: "Buzo gris",
    price: 25000,
    category: "buzos",
    description: "Buzo gris abrigado y suave"
}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 800);
    }); 
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id));
        }, 800);
    });
};
