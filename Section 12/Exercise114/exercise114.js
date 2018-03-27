var products = [
    { name: 'Iphone', price: 200 },
    { name: 'Motorola', price: 70 },
    { name: 'Samsung', price: 150 },
    { name: 'Sony', price: 98 },
    { name: 'Windows Phone', price: 10 }
];

let template = "";

products.forEach(function (product) {
    if (product.price < 100) {
        template += `<div class="product"><h1>${product.name}</h1>
   <strong>Price: $ ${product.price} </strong>
   <span>On sale !!</span></div>`;
    } else {
        template += `<div class="product"><h1>${product.name}</h1>
   <strong>Price: $ ${product.price} </strong></div>`;
    }
});

document.body.insertAdjacentHTML('afterbegin', template);