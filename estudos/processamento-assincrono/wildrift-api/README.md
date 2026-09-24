# 🎮 Estudo: Consumindo a API do Wild Rift com Node.js

Este guia explica passo a passo como este projeto foi estruturado, como o código assíncrono funciona e como você mesmo pode inspecionar, alterar e criar novos scripts.

---

## 📌 1. Estrutura do Projeto

Na pasta `wildrift-api`, temos os seguintes arquivos:
- `package.json`: Configurações do projeto Node.js, dependências e scripts.
- `api.js`: Nosso código JavaScript que faz a requisição assíncrona para buscar os campeões.
- `index.html`: Arquivo de interface web (para estudos de front-end).
- `node_modules/`: Pasta onde ficam os códigos das bibliotecas instaladas via `npm`.

---

## ⚙️ 2. Como o Projeto foi Configurado do Zero

Se você for criar um novo projeto do zero, o passo a passo no terminal é:

1. **Criar o `package.json`:**
   ```bash
   npm init -y
   ```
2. **Habilitar o uso de `import` (ES Modules):**
   No arquivo `package.json`, foi adicionada a linha:
   ```json
   "type": "module"
   ```
   *Sem isso, o Node.js exige `require()` em vez de `import`.*

3. **Instalar a biblioteca da API:**
   ```bash
   npm install @wildrift/champions-api
   ```

4. **Configurar o comando de execução:**
   No `package.json`, dentro de `"scripts"`, definimos:
   ```json
   "scripts": {
     "start": "node api.js"
   }
   ```
   Isso permite rodar o código com apenas `npm start`.

---

## 🔍 3. O Que Deu Errado no Início e Como Foi Corrigido (Debugging)

Quando você rodou `npm start` pela primeira vez, surgiram dois erros comuns de quem está integrando bibliotecas:

### ❌ Erro 1: Pacote não encontrado
```text
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'wildrift-champions-api'
```
* **Causa:** No arquivo de exemplo do autor, o import estava escrito sem o `@wildrift/`.
* **Solução:** O nome correto instalado no `package.json` é `@wildrift/champions-api`.

### ❌ Erro 2: Função não encontrada na exportação
```text
SyntaxError: The requested module '@wildrift/champions-api' does not provide an export named 'fetchChampionHeaders'
```
* **Causa:** O autor da biblioteca alterou a forma como o código é exportado, mas esqueceu de atualizar o `README.md` dele.
* **Como descobrimos o certo?** Inspecionamos o arquivo `node_modules/@wildrift/champions-api/dist/index.js` e vimos que a biblioteca exporta um objeto pronto chamado `wildRiftAPI`.
* **Solução:** Importar `{ wildRiftAPI }` e chamar seus métodos internos.

---

## 🧠 4. Entendendo o Código `api.js` Passo a Passo

Veja o que cada parte do [api.js](./api.js) faz:

```javascript
// 1. Importa o objeto da API do pacote instalado
import { wildRiftAPI } from "@wildrift/champions-api";

// 2. Define uma função assíncrona (async) para podermos usar o 'await'
async function carregarCampeoes() {
    // 3. O bloco try/catch captura qualquer erro (ex: queda de conexão)
    try {
        console.log("Buscando campeões do Wild Rift...");
        
        // 4. 'await' pausa a execução da função até os dados chegarem da internet
        // loadChampionHeaders() devolve um Array com todos os campeões básicos
        const campeoes = await wildRiftAPI.loadChampionHeaders();
        console.log(`Total de campeões encontrados: ${campeoes.length}`);

        // 5. Exibe os 5 primeiros campeões usando slice(0, 5) e forEach
        console.log("\nPrimeiros 5 campeões:");
        campeoes.slice(0, 5).forEach((camp, index) => {
            console.log(`${index + 1}. ${camp.name} (ID: ${camp.id})`);
        });

        // 6. Busca os detalhes completos de um campeão específico
        if (campeoes.length > 0) {
            console.log("\nBuscando detalhes completos do primeiro campeão...");
            const primeiro = await wildRiftAPI.fetchChampion(campeoes[0]);
            
            console.log(`Nome: ${primeiro.name}`);
            console.log(`Função (Role): ${primeiro.role}`);
            console.log(`Dificuldade: ${primeiro.difficulty}`);
            console.log(`Habilidades:`, Object.keys(primeiro.abilities));
        }

    } catch (erro) {
        // Se a requisição falhar, entra aqui sem travar a aplicação
        console.error("Erro ao buscar campeões:", erro.message);
    }
}

// 7. Chama a função para executar
carregarCampeoes();
```

---

## 🚀 5. Como Executar

No terminal, certifique-se de estar na pasta do projeto:
```bash
cd estudos/processamento-assincrono/wildrift-api
```

E execute:
```bash
npm start
```

---

## 🧪 6. Exercícios Práticos para Você Treinar Sozinho

Tente alterar o [api.js](./api.js) para fazer o seguinte:

### Desafio 1: Buscar um campeão específico pelo nome
Use o método `.find()` no array `campeoes` para encontrar o campeão com id `"yasuo"` ou `"lux"`:
```javascript
const campeaoDesejado = campeoes.find(c => c.id === "yasuo");
if (campeaoDesejado) {
    const detalhes = await wildRiftAPI.fetchChampion(campeaoDesejado);
    console.log(detalhes);
}
```

### Desafio 2: Listar o nome de todas as habilidades
No objeto retornado por `fetchChampion`, as habilidades estão em `primeiro.abilities`:
```javascript
console.log("Passiva:", primeiro.abilities.passive.name);
console.log("Q (First):", primeiro.abilities.first.name);
console.log("W (Second):", primeiro.abilities.second.name);
console.log("E (Third):", primeiro.abilities.third.name);
console.log("R (Ultimate):", primeiro.abilities.ultimate.name);
```

### Desafio 3: Ver as skins disponíveis
A propriedade `primeiro.skins` é uma lista de skins com nome e imagem:
```javascript
console.log("Skins disponíveis:");
primeiro.skins.forEach(skin => console.log(`- ${skin.name}`));
```

---

## 💡 7. Diferença: Executar no Node.js vs no Navegador (HTML)

- **No Node.js (terminal):** O script roda como um programa local no seu computador. Ele pode acessar bibliotecas em `node_modules` e fazer requisições HTTP livres de bloqueios de CORS.
- **No Navegador (`index.html`):** O navegador roda com regras de segurança mais rígidas (CORS) e não importa pacotes do `node_modules` diretamente sem um empacotador (como Vite). Para páginas HTML puras, costuma-se usar o `fetch()` nativo apontando para APIs públicas abertas (como a do ViaCEP ou a Data Dragon da Riot).
