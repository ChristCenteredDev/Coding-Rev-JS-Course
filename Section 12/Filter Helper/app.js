const products = [
    {name: "Ipad", category: "Devices", number: 20, price: 200},
    {name: "Sony 3D", category: "TV", number: 0, price: 400},
    {name: "E256", category: "Blender", number: 3, price: 50},
    {name: "Super Vision", category: "TV", number: 7, price: 500},
    {name: "Iphone 7", category: "Phone", number: 40, price: 500},
];

const results = products.filter(function (product) {
    return product.category === "TV" && product.number > 0 && product.price > 200;
});

console.log(results);