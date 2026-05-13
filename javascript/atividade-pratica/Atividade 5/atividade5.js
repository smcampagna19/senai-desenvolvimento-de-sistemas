const PONTOS_BRONZE = 100;
const PONTOS_PRATA  = 500;
const PONTOS_OURO   = 1000;

function verificarRank() {
    const pontos = Number(document.getElementById("pontos").value);

    let rank;

    if (pontos >= PONTOS_OURO) {
        rank = "Ouro";
    } else if (pontos >= PONTOS_PRATA) {
        rank = "Prata";
    } else if (pontos >= PONTOS_BRONZE) {
        rank = "Bronze";
    } else {
        rank = "Sem rank";
    }

    document.getElementById("resultado").innerHTML = "Pontuação: " + pontos + " - Rank: " + rank;
}
