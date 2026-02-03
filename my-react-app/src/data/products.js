const products = [
{
    id: "1",
    title: "Remera 1",
    price: 15000,
    category: "remeras",
    description: "Remera 1"
},
{
    id: "2",
    title: "Remera 2",
    price: 14000,
    category: "remeras",
    description: "Remera 2"
},
{
    id: "3",
    title: "Buzo 3",
    price: 25000,
    category: "buzos",
    description: "Buzo 3"
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
