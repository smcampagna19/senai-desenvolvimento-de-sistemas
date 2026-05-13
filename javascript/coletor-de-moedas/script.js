// ============================
// VARIÁVEIS
// ============================

let jogador       = document.getElementById("jogador");
let inimigoEl     = document.getElementById("inimigo");
let moeda         = document.getElementById("moeda");
let areaJogo      = document.getElementById("areaJogo");
let spanPontuacao = document.getElementById("pontuacao");
let spanTempo     = document.getElementById("tempo");
let spanVidas     = document.getElementById("vidas");
let mensagem      = document.getElementById("mensagem");

let pontuacao = 0;
let tempo = 30;
let vidas = 3;
let jogando = false;
let invencivel = false;

let posX = 280;
let posY = 180;

let iniX = 0;
let iniY = 0;

let teclas = {};
let mouseX = -999;
let mouseY = -999;
let usandoMouse = false;

let intervaloTempo;
let intervaloLoop;

// ============================
// POSIÇÃO INICIAL
// ============================

jogador.style.left = posX + "px";
jogador.style.top  = posY + "px";

inimigoEl.style.left = iniX + "px";
inimigoEl.style.top  = iniY + "px";

novaMoeda();

mensagem.textContent = "Clique na área ou pressione uma tecla para começar";

// ============================
// INICIAR JOGO
// ============================

function iniciar() {
    if (jogando) return;
    jogando = true;
    mensagem.textContent = "";

    intervaloTempo = setInterval(function() {
        tempo--;
        spanTempo.textContent = tempo;

        if (tempo <= 0) {
            encerrar();
        }
    }, 1000);

    intervaloLoop = setInterval(function() {
        moverJogador();
        moverInimigo();
        verificarColisaoMoeda();
        verificarColisaoInimigo();
    }, 16);
}

// ============================
// MOVER JOGADOR
// ============================

function moverJogador() {

    let velocidade = 4;

    if (teclas["ArrowRight"]) { posX += velocidade; }
    if (teclas["ArrowLeft"])  { posX -= velocidade; }
    if (teclas["ArrowUp"])    { posY -= velocidade; }
    if (teclas["ArrowDown"])  { posY += velocidade; }

    if (usandoMouse) {
        let dx = mouseX - posX - 20;
        let dy = mouseY - posY - 20;
        posX += dx * 0.2;
        posY += dy * 0.2;
    }

    if (posX < 0)   { posX = 0; }
    if (posX > 560) { posX = 560; }
    if (posY < 0)   { posY = 0; }
    if (posY > 360) { posY = 360; }

    jogador.style.left = posX + "px";
    jogador.style.top  = posY + "px";
}

// ============================
// MOVER INIMIGO
// ============================

function moverInimigo() {

    let velocidadeInimigo = 1.8 + (3 - vidas) * 0.4;

    let dx = posX - iniX;
    let dy = posY - iniY;
    let distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia > 0) {
        iniX += (dx / distancia) * velocidadeInimigo;
        iniY += (dy / distancia) * velocidadeInimigo;
    }

    inimigoEl.style.left = iniX + "px";
    inimigoEl.style.top  = iniY + "px";
}

// ============================
// NOVA MOEDA
// ============================

function novaMoeda() {
    let x = Math.random() * 560;
    let y = Math.random() * 360;
    moeda.style.left = x + "px";
    moeda.style.top  = y + "px";
}

// ============================
// COLISÃO COM A MOEDA
// ============================

function verificarColisaoMoeda() {

    let jLeft = parseFloat(jogador.style.left);
    let jTop  = parseFloat(jogador.style.top);
    let mLeft = parseFloat(moeda.style.left);
    let mTop  = parseFloat(moeda.style.top);

    if (
        jLeft < mLeft + 30 &&
        jLeft + 40 > mLeft &&
        jTop  < mTop  + 30 &&
        jTop  + 40 > mTop
    ) {
        pontuacao++;
        tempo++;
        spanPontuacao.textContent = pontuacao;
        spanTempo.textContent = tempo;
        novaMoeda();
    }
}

// ============================
// COLISÃO COM O INIMIGO
// ============================

function verificarColisaoInimigo() {

    if (invencivel) return;

    if (
        posX < iniX + 40 &&
        posX + 40 > iniX &&
        posY < iniY + 40 &&
        posY + 40 > iniY
    ) {
        vidas--;
        spanVidas.textContent = vidas;

        if (vidas <= 0) {
            encerrar();
            return;
        }

        invencivel = true;
        jogador.style.opacity = "0.3";

        iniX = posX < 300 ? 550 : 10;
        iniY = posY < 200 ? 350 : 10;
        inimigoEl.style.left = iniX + "px";
        inimigoEl.style.top  = iniY + "px";

        setTimeout(function() {
            invencivel = false;
            jogador.style.opacity = "1";
        }, 2000);
    }
}

// ============================
// ENCERRAR
// ============================

function encerrar() {
    jogando = false;
    clearInterval(intervaloTempo);
    clearInterval(intervaloLoop);

    let record = localStorage.getItem("record") || 0;

    if (pontuacao > record) {
        record = pontuacao;
        localStorage.setItem("record", record);
        mensagem.textContent = "Novo recorde! " + pontuacao + " moedas 🏆 — Clique para jogar de novo";
    } else {
        mensagem.textContent = "Você pegou " + pontuacao + " moedas! Recorde: " + record + " — Clique para jogar de novo";
    }
}

function reiniciar() {
    pontuacao = 0;
    tempo = 30;
    vidas = 3;
    posX = 280;
    posY = 180;
    iniX = 0;
    iniY = 0;
    invencivel = false;

    spanPontuacao.textContent = pontuacao;
    spanTempo.textContent = tempo;
    spanVidas.textContent = vidas;

    jogador.style.opacity = "1";
    jogador.style.left = posX + "px";
    jogador.style.top  = posY + "px";
    inimigoEl.style.left = iniX + "px";
    inimigoEl.style.top  = iniY + "px";

    novaMoeda();
    iniciar();
}

// ============================
// EVENTOS — TECLADO
// ============================

document.addEventListener("keydown", function(e) {
    teclas[e.key] = true;
    usandoMouse = false;

    if (!jogando && tempo == 30) { iniciar(); }
    if (!jogando && tempo == 0)  { reiniciar(); }

    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
        e.preventDefault();
    }
});

document.addEventListener("keyup", function(e) {
    teclas[e.key] = false;
});

// ============================
// EVENTOS — MOUSE
// ============================

areaJogo.addEventListener("mousemove", function(e) {
    let rect = areaJogo.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    usandoMouse = true;

    if (!jogando && tempo == 30) { iniciar(); }
});

areaJogo.addEventListener("click", function() {
    if (!jogando && tempo == 0)  { reiniciar(); }
    if (!jogando && vidas == 0)  { reiniciar(); }
});
