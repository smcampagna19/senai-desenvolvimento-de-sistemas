const PRECO_PRODUTO   = 50;
const TAXA_ENTREGA    = 10;
const MINIMO_DESCONTO = 200;
const VALOR_DESCONTO  = 20;

function calcularPedido() {
    const nome       = document.getElementById("nome").value;
    const quantidade = Number(document.getElementById("quantidade").value);

    const subtotal = quantidade * PRECO_PRODUTO;
    let desconto   = 0;

    if (subtotal > MINIMO_DESCONTO) {
        desconto = VALOR_DESCONTO;
    }

    const total = subtotal + TAXA_ENTREGA - desconto;

    document.getElementById("resultado").innerHTML =
        "Cliente: "            + nome                       + "<br>" +
        "Produtos: R$ "        + subtotal.toFixed(2)         + "<br>" +
        "Taxa de entrega: R$ " + TAXA_ENTREGA.toFixed(2)     + "<br>" +
        "Desconto: R$ "        + desconto.toFixed(2)         + "<br>" +
        "Total: R$ "           + total.toFixed(2);
}
