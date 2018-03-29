/*
We have a list of cars with a brand and a price, and we want to convert the price to a different currency, and put it in a new array just like  “Ford is 40000 rupies”.
*/

const cars = [
    { name: 'Ford', price: 200 },
    { name: 'Nissan', price: 400 },
    { name: 'Chevy', price: 600 }
];

const listCars = cars.map(function (item) {
    return `${item.name} is ${convertPrice(item.price)} rupies`;
});

// Convert's USD to Rupee at 65.01 rate
function convertPrice(price) {
    return price * 65.01;
}

console.log(listCars);