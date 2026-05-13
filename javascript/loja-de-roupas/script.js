
// CONSTANTES DA LOJA (regras fixas do sistema)

const PRECOS_PECA = {
    "Camiseta": 59.90,
    "Calça": 79.90,
    "Jaqueta": 99.90,
    "Vestido": 89.90,
    "Shorts": 49.90,
    "Blusa": 69.90
}; // preços variáveis por peça de roupa
const VALOR_MINIMO_DESCONTO = 150; // valor mínimo para ganhar desconto
const PORCENTAGEM_DESCONTO = 10;   // desconto de 10% em compras grandes

 
// FUNÇÃO PRINCIPAL - executa quando clicar no botão


function calcular() {

    // pega o que o usuário digitou
    var nome = document.getElementById("nomeCliente").value;
    var peca = document.getElementById("nomePeca").value;
    var quantidade = document.getElementById("quantidade").value;

    // converte quantidade para número
    quantidade = Number(quantidade);

    // verifica se os campos estão preenchidos
    if (nome == "" || peca == "" || quantidade == "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // verifica se a quantidade é válida
    if (quantidade <= 0) {
        alert("A quantidade precisa ser maior que zero!");
        return;
    }

    // calcula o valor total sem desconto
    var precoPeca = PRECOS_PECA[peca];
    var totalSemDesconto = quantidade * precoPeca;

    // verifica se tem direito ao desconto
    var desconto = 0;
    var mensagemDesconto = "Sem desconto";

    if (totalSemDesconto >= VALOR_MINIMO_DESCONTO) {
        desconto = totalSemDesconto * (PORCENTAGEM_DESCONTO / 100);
        mensagemDesconto = "Desconto de " + PORCENTAGEM_DESCONTO + "% aplicado!";
    }

    // calcula o valor final
    var totalFinal = totalSemDesconto - desconto;

    // monta o texto do resultado
    var texto = "";
    texto += "<hr>";
    texto += "<b> Resumo do Pedido</b><br><br>";
    texto += "Cliente: " + nome + "<br>";
    texto += "Peça: " + peca + "<br>";
    texto += "Quantidade: " + quantidade + "<br>";
    texto += "Preço por peça: R$ " + precoPeca.toFixed(2) + "<br><br>";
    texto += "Total sem desconto: R$ " + totalSemDesconto.toFixed(2) + "<br>";
    texto += "Desconto: R$ " + desconto.toFixed(2) + " (" + mensagemDesconto + ")" + "<br>";
    texto += "<b> Total final: R$ " + totalFinal.toFixed(2) + "</b>";
    texto += "<hr>";

    // mostra o resultado na tela
    document.getElementById("resultado").innerHTML = texto;

}
