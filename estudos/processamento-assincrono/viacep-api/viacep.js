const botao = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// A função precisa ser declarada como 'async' para usar o 'await' dentro dela
const buscarCep = async () => {
    const cep = document.getElementById("inputCep").value;

    // Validação básica
    if (cep.length !== 8) {
        resultado.innerHTML = "<p>Por favor, digite um CEP válido com 8 números.</p>";
        return;
    }

    resultado.innerHTML = "<p>Buscando...</p>";

    // Bloco try/catch para capturar falhas de rede ou erros na requisição
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // O await pausa novamente até o navegador converter os dados brutos em JSON (Objeto JS)
        const dados = await resposta.json();

        // A API do ViaCEP retorna 'erro: true' se o CEP não existir
        if (dados.erro) {
            resultado.innerHTML = "<p>CEP nao encontrado.</p>";
        } else {
            resultado.innerHTML = `
                <p><strong>DDD:</strong> ${dados.ddd}</p>
                <p><strong>Região:</strong> ${dados.regiao}</p>
                <p><strong>Cidade:</strong> ${dados.localidade} - ${dados.uf}</p>
            `;
        }

    } catch (erro) {
        // Se a requisição falhar (falta de internet, por exemplo), cai aqui
        resultado.innerHTML = "<p>Erro ao conectar com o servidor.</p>";
        console.error("Detalhe do erro:", erro);
    }
}

botao.addEventListener("click", buscarCep);