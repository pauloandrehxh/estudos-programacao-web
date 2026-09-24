# Operador 3 dots (...) e Classes no JavaScript

## 1. O Operador "3 dots" (...)
Os três pontos no JavaScript possuem duas utilidades diferentes, dependendo do contexto: **Spread** (espalhar/desempacotar) e **Rest** (agrupar).

### A. Spread Operator (Espalhar)
É usado para desempacotar elementos de um array ou propriedades de um objeto. É muito útil para criar cópias independentes ou juntar dados sem modificar as variáveis originais.

**Exemplo com Arrays:**

```Javascript

    const frontend = ["HTML", "CSS", "JS"];
    const backend = ["Node", "SQL"];

    // Cria um novo array espalhando os itens dos arrays anteriores
    const fullstack = [...frontend, ...backend, "React"]; 
    console.log(fullstack); 
    // Resultado: ["HTML", "CSS", "JS", "Node", "SQL", "React"]
```

**Exemplo com Objetos:**

```Javascript

    const usuario = { nome: "Ana", idade: 22 };

    // Cria um novo objeto copiando os dados do anterior
    const usuarioLogado = { ...usuario, status: "Online", token: "12345" };
    console.log(usuarioLogado);
    // Resultado: { nome: "Ana", idade: 22, status: "Online", token: "12345" }
```

### B. Rest Operator (Agrupar)
Enquanto o Spread "espalha", o Rest "agrupa". Ele é usado nos parâmetros de uma função para juntar vários argumentos soltos dentro de um único array.

**Exemplo:**

```Javascript
    // O ...numeros empacota todos os argumentos passados
    const calcularSoma = (...numeros) => {
        // Usamos o método reduce para somar todos os itens do array
        return numeros.reduce((total, atual) => total + atual, 0);
    };

    console.log(calcularSoma(5, 10, 15)); // Resultado: 30
    console.log(calcularSoma(1, 2));      // Resultado: 3
```

## 2. Classes (Orientação a Objetos no JS)
O JavaScript é baseado em protótipos, mas a sintaxe de "class" (introduzida no ES6) facilitou muito a criação de objetos e a Programação Orientada a Objetos (POO).

### A. Criando uma Classe e Instanciando
O método "constructor" é executado automaticamente sempre que você cria um novo objeto a partir daquela classe usando a palavra-chave "new".

```Javascript

    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome; // O 'this' aponta para o próprio objeto criado
            this.idade = idade;
        }

        // Método da classe
        apresentar() {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }

    // Instanciando (criando) o objeto
    const aluno = new Pessoa("Carlos", 20);
    console.log(aluno.apresentar()); 
    // Resultado: "Olá, meu nome é Carlos e tenho 20 anos."
```

### B. Herança (extends e super)
Você pode criar uma classe que herda propriedades e métodos de outra classe pai. A classe filha deve usar a palavra "extends" e chamar a função "super()" no construtor.

```Javascript
    // A classe Desenvolvedor herda da classe Pessoa
    class Desenvolvedor extends Pessoa {
        constructor(nome, idade, linguagemFavorita) {
            super(nome, idade); // Chama o construtor da classe pai (Pessoa)
            this.linguagemFavorita = linguagemFavorita;
        }

        // Polimorfismo: sobrescreve o método da classe pai ou cria um novo
        apresentarDev() {
            return `${this.apresentar()} Minha linguagem é ${this.linguagemFavorita}.`;
        }
    }

    const dev = new Desenvolvedor("Marina", 25, "JavaScript");
    console.log(dev.apresentarDev());
    // Retorna: "Olá, meu nome é Marina e tenho 25 anos. Minha linguagem é JavaScript."
```