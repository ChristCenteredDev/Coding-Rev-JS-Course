var products = [
    { name: 'Iphone', price: 200 },
    { name: 'Motorola', price: 70 },
    { name: 'Samsung', price: 150 },
    { name: 'Sony', price: 98 },
    { name: 'Windows Phone', price: 10 }
];

let productDiv = document.querySelector(".product");
let template = "";

products.forEach(function (product) {
    if (product.price < 100) {
        template += `<h1>${product.name}</h1>
   <strong>Price: $ ${product.price} </strong>
   <span>On sale !!</span>`;
    } else {
        template += `<h1>${product.name}</h1>
   <strong>Price: $ ${product.price} </strong>`;
    }
});

productDiv.innerHTML = '';
productDiv.insertAdjacentHTML('afterbegin', template);
