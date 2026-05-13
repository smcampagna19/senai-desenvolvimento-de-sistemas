const PRECO_PRODUTO = 30
const TAXA_ENTREGA = 5

function calcular(){

let quantidade = document.getElementById("quantidade").value

let totalProdutos = quantidade * PRECO_PRODUTO

let totalPedido = totalProdutos + TAXA_ENTREGA

document.getElementById("resultado").innerText =
"Valor total do pedido: R$ " + totalPedido

}