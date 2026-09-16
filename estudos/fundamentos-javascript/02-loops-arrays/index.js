const users = [
    {
        name: "Paulo",
        age: 20,
        active: true
    },
    {
        name: "Ana",
        age: 17,
        active: false
    },
    {
        name: "Carlos",
        age: 30,
        active: true
    },
    {
        name: "Maria",
        age: 25,
        active: true
    }
];

let activeUsers = 0;
let inactiveUsers = 0;
let adults = 0;
let minors = 0;

console.log("=== RELATÓRIO DE USUÁRIOS ===");

for (const user of users) {
    console.log(`Nome: ${user.name}`);
    console.log(`Idade: ${user.age}`);
    console.log(`Status: ${user.active ? "Ativo" : "Inativo"}`);
    console.log("");

    if (user.active) {
        activeUsers++;
    } else {
        inactiveUsers++;
    }

    if (user.age < 18) {
        minors++;
    } else {
        adults++;
    }
}

console.log("=== RESUMO ===");
console.log(`Total: ${users.length}`);
console.log(`Ativos: ${activeUsers}`);
console.log(`Inativos: ${inactiveUsers}`);
console.log(`Adultos: ${adults}`);
console.log(`Menores de Idade: ${minors}`);