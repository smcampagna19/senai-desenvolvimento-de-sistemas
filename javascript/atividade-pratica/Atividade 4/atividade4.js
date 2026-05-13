const MINIMO_FRETE_GRATIS = 150;
const VALOR_FRETE = 25;

function calcularFrete() {
    const valorItens = Number(document.getElementById("valor").value);

    let frete = VALOR_FRETE;

    if (valorItens >= MINIMO_FRETE_GRATIS) {
        frete = 0;
        document.getElementById("resultado").innerHTML = "Frete: GRÁTIS! Total: R$ " + valorItens.toFixed(2);
    } else {
        const faltam = MINIMO_FRETE_GRATIS - valorItens;
        const total = valorItens + frete;
        document.getElementById("resultado").innerHTML = "Frete: R$ " + frete.toFixed(2) + " - Total: R$ " + total.toFixed(2) + " (Faltam R$ " + faltam.toFixed(2) + " para frete grátis)";
    }
}
