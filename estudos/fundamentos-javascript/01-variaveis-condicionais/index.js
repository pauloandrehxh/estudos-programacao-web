// const user = {
//     name: "Paulo",
//     age: 20,
//     active: true,
//     role: "user"
// };

const user = {
    name: "Ana",
    age: 25,
    active: true,
    role: "admin"
};

let accessMessage = "";
let hasAccess = false;

if (!user.active) {
    accessMessage = "Acesso negado: usuário inativo.";
} else if (user.age < 18) {
    accessMessage = "Acesso negado: usuário menor de idade.";
} else if (user.role === "admin") {
    accessMessage = "Acesso permitido: privilégios de administrador.";
} else {
    accessMessage = "Acesso permitido: usuário comum.";
}

console.log(`Usuário: ${user.name}`);
console.log(`Idade: ${user.age}`);
console.log(`Status: ${user.active ? "ativo" : "inativo"}`);
console.log(`Perfil: ${user.role}`);
console.log(accessMessage);