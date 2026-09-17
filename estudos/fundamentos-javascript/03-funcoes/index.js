function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero.";
    }

    return a / b;
}

function percentage(value, percent) {
    return value * (percent / 100);
}

function calculate(a, b, operation) {
    if (operation === "sum") {
        return sum(a, b);
    }

    if (operation === "subtract") {
        return subtract(a, b);
    }

    if (operation === "multiply") {
        return multiply(a, b);
    }

    if (operation === "divide") {
        return divide(a, b);
    }

    return "Operação inválida.";
}

console.log("=== CALCULADORA ===");

console.log(`Soma: ${calculate(10, 5, "sum")}`);
console.log(`Subtração: ${calculate(10, 5, "subtract")}`);
console.log(`Multiplicação: ${calculate(10, 5, "multiply")}`);
console.log(`Divisão: ${calculate(10, 5, "divide")}`);
console.log(`Porcentagem: ${percentage(200, 10)}`);