const cart = [
    {
        id: 1,
        name: "Notebook",
        price: 3500,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 120,
        quantity: 2
    },
    {
        id: 3,
        name: "Teclado",
        price: 250,
        quantity: 1
    },
    {
        id: 4,
        name: "Monitor",
        price: 1200,
        quantity: 2
    }
];

function findProduct(id) {
    return cart.find(product => product.id === id);
}

function filterByMinimumPrice(minimumPrice) {
    return cart.filter(product => product.price >= minimumPrice);
}

function getProductNames() {
    return cart.map(product => product.name);
}

function getCartTotal() {
    return cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
}

function getTotalItems() {
    return cart.reduce(
        (total, product) => total + product.quantity,
        0
    );
}

function hasProductAbovePrice(price) {
    return cart.some(product => product.price > price);
}

function allProductsHaveQuantity() {
    return cart.every(product => product.quantity > 0);
}

console.log("=== CARRINHO ===");

console.log("Produtos:");
console.log(getProductNames());

console.log("");

console.log(`Quantidade de itens: ${getTotalItems()}`);
console.log(`Valor total: R$ ${getCartTotal()}`);

console.log("");

console.log("Produto ID 2:");
console.log(findProduct(2));

console.log("");

console.log("Produtos acima de R$ 500:");
console.log(filterByMinimumPrice(500));

console.log("");

console.log(
    `Existe produto acima de R$ 3000? ${hasProductAbovePrice(3000)}`
);

console.log(
    `Todos possuem quantidade? ${allProductsHaveQuantity()}`
);