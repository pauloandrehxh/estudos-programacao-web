import { wildRiftAPI } from "@wildrift/champions-api";

async function carregarCampeoes() {
    try {
        console.log("Buscando campeões do Wild Rift...");

        // Busca a lista básica de campeões (headers: id, nome e imagem)
        const campeoes = await wildRiftAPI.loadChampionHeaders();
        console.log(`Total de campeões encontrados: ${campeoes.length}`);

        // Exibe os 5 primeiros no console
        console.log("\nPrimeiros 5 campeões:");
        campeoes.slice(0, 5).forEach((camp, index) => {
            console.log(`${index + 1}. ${camp.name} (ID: ${camp.id})`);
        });

        // Busca os detalhes completos do primeiro campeão
        if (campeoes.length > 0) {
            console.log("\nBuscando detalhes completos do primeiro campeão...");
            const primeiro = await wildRiftAPI.fetchChampion(campeoes[0]);
            console.log(`Nome: ${primeiro.name}`);
            console.log(`Função (Role): ${primeiro.role}`);
            console.log(`Dificuldade: ${primeiro.difficulty}`);
            console.log(`Habilidades:`, Object.keys(primeiro.abilities));
        }

    } catch (erro) {
        console.error("Erro ao buscar campeões:", erro.message);
    }
}

carregarCampeoes();
