async function buscarDados() {
    console.log("Buscando dados...");

    let resposta = await fetch("https;//api.exemplo.com/dados");

    let dados = await resposta.json();

    console.log(dados);
}

buscarDados();
console.log("Programa continua executando...");