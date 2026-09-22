const products = [
    {
        id: 1,
        name: "Notebook",
        price: 3500,
        stock: 5,
        active: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 120,
        stock: 10,
        active: true
    },
    {
        id: 3,
        name: "Teclado",
        price: 250,
        stock: 0,
        active: false
    }
];

function findProductById(id) {
    for (const product of products) {
        if (product.id === id) {
            return product;
        }
    }

    return null;
}

function updatePrice(id, newPrice) {
    const product = findProductById(id);

    if (!product) {
        return "Produto não encontrado.";
    }

    product.price = newPrice;

    return "Preço atualizado com sucesso.";
}

function updateStock(id, quantity) {
    const product = findProductById(id);

    if (!product) {
        return "Produto não encontrado.";
    }

    product.stock = quantity;

    return "Estoque atualizado com sucesso.";
}

function isAvailable(id) {
    const product = findProductById(id);

    if (!product) {
        return false;
    }

    return product.active && product.stock > 0;
}

console.log("=== PRODUTOS ===");

for (const product of products) {
    console.log(`ID: ${product.id}`);
    console.log(`Produto: ${product.name}`);
    console.log(`Preço: R$ ${product.price}`);
    console.log(`Estoque: ${product.stock}`);
    console.log(`Status: ${product.active ? "Ativo" : "Inativo"}`);
    console.log("");
}

console.log(updatePrice(1, 3200));
console.log(updateStock(2, 8));

console.log("\n==================\n")

for (const product of products) {
    console.log(`ID: ${product.id}`);
    console.log(`Produto: ${product.name}`);
    console.log(`Preço: R$ ${product.price}`);
    console.log(`Estoque: ${product.stock}`);
    console.log(`Status: ${product.active ? "Ativo" : "Inativo"}`);
    console.log("");
}

console.log(findProductById(1));

console.log(`Produto 1 disponível: ${isAvailable(1)}`);
console.log(`Produto 3 disponível: ${isAvailable(3)}`);