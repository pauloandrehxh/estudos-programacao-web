# Fundamentos de JavaScript para Backend

Uma introdução breve aos principais conceitos de JavaScript que você deve dominar antes de avançar para Node.js e desenvolvimento backend.

## 1. Variáveis e tipos

Variáveis armazenam valores que serão utilizados pelo programa.

Em JavaScript, os principais tipos são:

- `string` — textos
- `number` — números
- `boolean` — verdadeiro ou falso
- `null` — ausência intencional de valor
- `undefined` — valor ainda não definido
- `object` — objetos e estruturas de dados
- `array` — listas de valores

Prefira `const` quando o valor não precisar ser reatribuído e `let` quando precisar.

```js
const name = "Maria";
let age = 25;
const active = true;
```

### Projeto para praticar

**Cadastro de usuários**

Crie um programa que armazene usuários com:

```js
{
  name: "Maria",
  age: 25,
  email: "maria@email.com",
  active: true
}
```

Pratique criação, alteração e leitura dessas informações.

## 2. Condicionais

Condicionais permitem que o programa tome decisões.

Os principais recursos são:

- `if`
- `else`
- `else if`
- `switch`
- operador ternário

```js
if (user.active) {
  console.log("Usuário ativo");
} else {
  console.log("Usuário inativo");
}
```

### Projeto para praticar

**Sistema de acesso**

Crie uma função que receba um usuário e determine se ele pode acessar o sistema.

Regras:

- usuário precisa estar ativo;
- usuário precisa ter idade mínima;
- administradores possuem acesso especial.

## 3. Loops

Loops servem para repetir uma operação.

Os mais importantes são:

- `for`
- `while`
- `for...of`

```js
for (const user of users) {
  console.log(user.name);
}
```

### Projeto para praticar

**Relatório de usuários**

Crie uma lista de usuários e percorra todos eles para gerar um relatório contendo:

- nome;
- email;
- status;
- quantidade de usuários ativos.

## 4. Funções

Funções agrupam uma lógica que pode ser reutilizada.

```js
function sum(a, b) {
  return a + b;
}

const result = sum(10, 20);
```

Também é importante conhecer arrow functions:

```js
const sum = (a, b) => a + b;
```

### Projeto para praticar

**Calculadora**

Crie funções para:

- somar;
- subtrair;
- multiplicar;
- dividir;
- calcular porcentagem.

Depois organize cada operação de forma que possa ser reutilizada em outras partes do programa.

## 5. Arrays

Arrays representam listas de valores.

```js
const users = ["Ana", "João", "Maria"];
```

No backend, você utilizará muito métodos como:

- `map()` — transforma os elementos;
- `filter()` — seleciona elementos;
- `find()` — encontra um elemento;
- `some()` — verifica se algum elemento atende a uma condição;
- `every()` — verifica se todos atendem;
- `reduce()` — transforma vários valores em um resultado.

```js
const activeUsers = users.filter(user => user.active);
```

### Projeto para praticar

**Carrinho de compras**

Crie um array de produtos:

```js
const cart = [
  { name: "Notebook", price: 3000, quantity: 1 },
  { name: "Mouse", price: 100, quantity: 2 },
  { name: "Teclado", price: 200, quantity: 1 }
];
```

Implemente funções para:

- listar produtos;
- calcular o total;
- encontrar o produto mais caro;
- filtrar produtos acima de determinado preço.

## 6. Objetos

Objetos permitem representar entidades e seus dados.

```js
const user = {
  id: 1,
  name: "Ana",
  email: "ana@email.com",
  active: true
};
```

Objetos são fundamentais no backend porque grande parte dos dados de uma aplicação pode ser representada dessa forma.

Também é importante conhecer destructuring:

```js
const { name, email } = user;
```

### Projeto para praticar

**Gerenciamento de produtos**

Crie objetos para representar produtos e implemente funções para:

- buscar por ID;
- atualizar preço;
- alterar estoque;
- verificar disponibilidade.

## 7. Escopo e Closures

**Escopo** define onde uma variável pode ser acessada.

```js
function example() {
  const message = "Olá";

  console.log(message);
}
```

`message` existe dentro da função, mas não fora dela.

**Closure** acontece quando uma função mantém acesso a variáveis do escopo onde foi criada.

```js
function createCounter() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

### Projeto para praticar

**Contador com histórico**

Crie uma função que mantenha internamente:

- valor atual;
- quantidade de incrementos;
- quantidade de decrementos.

O estado não deve ficar diretamente acessível fora da função.

## 8. Callbacks

Callback é uma função passada como argumento para outra função.

```js
function processUser(user, callback) {
  callback(user);
}

processUser(
  { name: "Ana" },
  user => console.log(user.name)
);
```

Callbacks aparecem bastante em JavaScript e ajudam a entender como a linguagem trabalha com funções e operações assíncronas.

### Projeto para praticar

**Processador de dados**

Crie uma função que receba uma lista e uma função de transformação.

Exemplo:

```js
processUsers(users, user => user.name);
```

O objetivo é praticar funções sendo utilizadas como dados.

## 9. Promises

Promises representam operações que podem terminar no futuro.

Uma Promise pode:

- ser concluída com sucesso;
- falhar;
- ainda estar em execução.

```js
const promise = new Promise((resolve, reject) => {
  resolve("Operação concluída");
});
```

Você pode consumir uma Promise usando `.then()` e `.catch()`:

```js
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Projeto para praticar

**Simulador de requisição**

Crie funções que simulem consultas:

```js
getUser()
getProducts()
getOrders()
```

Cada função deve retornar uma Promise e, depois de alguns segundos, retornar os dados ou um erro.

## 10. Async/Await

`async/await` é uma forma mais legível de trabalhar com Promises.

```js
async function main() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
```

Também é importante entender `Promise.all()` para executar operações independentes em paralelo:

```js
const [user, orders] = await Promise.all([
  getUser(),
  getOrders()
]);
```

### Projeto para praticar

**Dashboard de usuário**

Crie funções que busquem:

- dados do usuário;
- pedidos;
- notificações.

Depois monte um único resultado utilizando `async/await` e `Promise.all()`.

## 11. JSON

JSON é um formato muito utilizado para transportar e armazenar dados.

Objeto para JSON:

```js
const json = JSON.stringify(user);
```

JSON para objeto:

```js
const user = JSON.parse(json);
```

APIs REST normalmente utilizam JSON para enviar e receber informações.

### Projeto para praticar

**Banco de dados em arquivo**

Crie um arquivo `users.json` e desenvolva funções para:

- ler usuários;
- adicionar usuários;
- atualizar usuários;
- remover usuários.

Esse projeto prepara você para trabalhar com persistência de dados.

## 12. Módulos

Módulos permitem dividir uma aplicação em arquivos menores e organizados.

```js
// math.js
export function sum(a, b) {
  return a + b;
}
```

```js
// app.js
import { sum } from "./math.js";

console.log(sum(2, 3));
```

No backend, organizar o código em módulos será essencial.

### Projeto para praticar

**Sistema de usuários modular**

Organize uma aplicação em:

```text
src/
├── users.js
├── validation.js
├── storage.js
└── app.js
```

Cada arquivo deve possuir uma responsabilidade específica.

## 13. Tratamento de erros

Erros são inevitáveis em aplicações reais. O importante é saber tratá-los corretamente.

```js
try {
  const result = operation();
} catch (error) {
  console.error(error);
}
```

Também podemos lançar erros manualmente:

```js
if (!user) {
  throw new Error("Usuário não encontrado");
}
```

### Projeto para praticar

**Sistema de usuários seguro**

Adicione validações ao projeto anterior:

- email obrigatório;
- email único;
- nome obrigatório;
- usuário precisa existir para ser atualizado;
- usuário precisa existir para ser removido.

Cada situação deve gerar um erro apropriado.

## 14. Classes

Classes são uma forma de organizar dados e comportamentos relacionados.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Olá, sou ${this.name}`;
  }
}

const user = new User("Ana", "ana@email.com");
```

Você encontrará classes em diversos projetos e bibliotecas, mesmo que não precise utilizá-las em tudo.

### Projeto para praticar

**Sistema de biblioteca**

Crie classes como:

```text
Book
User
Library
```

A `Library` deve controlar:

- cadastro de livros;
- cadastro de usuários;
- empréstimos;
- devoluções.

## 15. Event Loop

O Event Loop é um dos conceitos mais importantes para quem pretende trabalhar com Node.js.

JavaScript executa código síncrono e também consegue lidar com operações assíncronas sem bloquear o programa inteiro.

Observe:

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

Uma boa parte do funcionamento do backend em Node.js depende de você entender por que operações assíncronas não são executadas simplesmente na ordem em que aparecem no código.

### Projeto para praticar

**Simulador de processamento**

Crie várias operações assíncronas com tempos diferentes:

```text
Buscar usuário
Buscar pedidos
Buscar pagamentos
Enviar notificação
```

Depois teste:

- execução sequencial;
- execução paralela;
- operações que falham;
- diferentes tempos de resposta.

## 🚀 Projeto final: Task Manager CLI

Depois de estudar os fundamentos, junte tudo em um projeto pequeno.

Crie uma aplicação de linha de comando para gerenciar tarefas.

### Funcionalidades

```bash
node app.js add "Estudar JavaScript"
node app.js list
node app.js complete 1
node app.js remove 1
```

Cada tarefa pode possuir:

```js
{
  id: 1,
  title: "Estudar JavaScript",
  completed: false,
  createdAt: "2026-09-13T22:00:00.000Z"
}
```

### Conceitos utilizados

- Variáveis e tipos
- Condicionais
- Loops
- Funções
- Arrays
- Objetos
- Destructuring
- Módulos
- JSON
- `async/await`
- Promises
- Tratamento de erros
- `fs` do Node.js
- Event Loop

### Estrutura sugerida

```text
task-manager/
├── src/
│   ├── tasks.js
│   ├── storage.js
│   ├── cli.js
│   └── app.js
├── data/
│   └── tasks.json
├── package.json
└── README.md
```

### 🎯 Objetivo final

Não tente apenas fazer o projeto funcionar.

Procure conseguir explicar:

> Como os dados são armazenados?

> Por que estou usando uma função aqui?

> Por que essa operação é assíncrona?

> O que acontece quando ocorre um erro?

> Por que separei esse código em módulos?

Quando você conseguir responder essas perguntas com segurança, estará pronto para começar a estudar **Node.js, HTTP e APIs REST**.
