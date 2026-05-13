const VELOCIDADE_INICIAL = 10;

let = velocidade = VELOCIDADE_INICIAL;

document.getElementById("velocidade").innerText = velocidade;

function aumentar(){
    if (velocidade < 100) {
        velocidade = velocidade + 1;
        atualizar();
    }
}

function diminuir(){
    if (velocidade > 0) {
        velocidade = velocidade - 1;
        atualizar();
    }
}

function atualizar() {
    document.getElementById("velocidade").innerText = velocidade;
}