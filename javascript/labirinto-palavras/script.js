// --- CONFIGURAÇÕES ---
var TAMANHO = 40; // tamanho de cada célula

// Labirinto: 1 = parede, 0 = caminho
var mapa = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,1,0,1,0,1,1,0,1,0,1],
  [1,0,1,0,0,0,0,1,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,1],
  [1,1,1,0,0,1,1,1,0,1,0,1],
  [1,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,1,0,0,0,1,1,1,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
];

// Palavras do jogo
var palavras = [
  { palavra: "BOLA", silabas: ["BO","LA"] },
  { palavra: "MESA", silabas: ["ME","SA"] },
  { palavra: "GATO", silabas: ["GA","TO"] },
];

// --- VARIÁVEIS ---
var nivel = 0;
var pontos = 0;
var vidas = 3;
var tempo = 60;
var portaAberta = false;
var silabasColetadas = [];
var itens = [];
var jogador = { col: 1, lin: 1 };
var portaCol = 10, portaLin = 9;
var jogoRodando = true;
var timer;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// --- INICIAR NÍVEL ---
function iniciarNivel() {
  if (nivel >= palavras.length) {
    document.getElementById("mensagem").textContent = "Parabéns! Você venceu! Pontos: " + pontos;
    jogoRodando = false;
    clearInterval(timer);
    return;
  }

  jogador = { col: 1, lin: 1 };
  silabasColetadas = [];
  portaAberta = false;
  tempo = 60;

  document.getElementById("palavra").textContent = palavras[nivel].silabas.join("-");
  document.getElementById("coletado").textContent = "—";
  document.getElementById("mensagem").textContent = "";

  gerarItens();
  desenhar();

  clearInterval(timer);
  timer = setInterval(function() {
    if (!jogoRodando) return;
    tempo--;
    document.getElementById("tempo").textContent = tempo;
    if (tempo <= 0) {
      perderVida();
    }
  }, 1000);
}

// --- GERAR SÍLABAS NO MAPA ---
function gerarItens() {
  itens = [];

  var livres = [];
  for (var lin = 1; lin < mapa.length - 1; lin++) {
    for (var col = 1; col < mapa[0].length - 1; col++) {
      if (mapa[lin][col] === 0 && !(col === 1 && lin === 1) && !(col === portaCol && lin === portaLin)) {
        livres.push({ col: col, lin: lin });
      }
    }
  }

  livres.sort(function() { return Math.random() - 0.5; });

  var silabas = palavras[nivel].silabas;
  for (var i = 0; i < silabas.length; i++) {
    itens.push({ texto: silabas[i], col: livres[i].col, lin: livres[i].lin, certa: true, ordem: i, coletada: false });
  }

  var erradas = ["RE","PI","LO","NE"];
  for (var j = 0; j < erradas.length; j++) {
    itens.push({ texto: erradas[j], col: livres[silabas.length + j].col, lin: livres[silabas.length + j].lin, certa: false, coletada: false });
  }
}

// --- MOVER JOGADOR ---
document.addEventListener("keydown", function(e) {
  if (!jogoRodando) return;

  var novoCol = jogador.col;
  var novoLin = jogador.lin;

  if (e.key === "ArrowLeft")  novoCol--;
  if (e.key === "ArrowRight") novoCol++;
  if (e.key === "ArrowUp")    novoLin--;
  if (e.key === "ArrowDown")  novoLin++;

  if (mapa[novoLin] && mapa[novoLin][novoCol] === 0) {
    jogador.col = novoCol;
    jogador.lin = novoLin;
    verificarColisao();
    desenhar();
  }

  if (portaAberta && jogador.col === portaCol && jogador.lin === portaLin) {
    pontos += 30;
    nivel++;
    atualizarHUD();
    iniciarNivel();
  }
});

// --- VERIFICAR COLISÃO ---
function verificarColisao() {
  for (var i = 0; i < itens.length; i++) {
    var s = itens[i];
    if (s.coletada) continue;

    if (s.col === jogador.col && s.lin === jogador.lin) {
      s.coletada = true;

      if (s.certa) {
        if (s.ordem === silabasColetadas.length) {
          silabasColetadas.push(s.texto);
          pontos += 10;

          if (silabasColetadas.length === palavras[nivel].silabas.length) {
            portaAberta = true;
            document.getElementById("mensagem").textContent = "Palavra formada! Vá até a porta!";
          }
        } else {
          s.coletada = false;
          document.getElementById("mensagem").textContent = "Ordem errada! Tente de novo!";
        }
      } else {
        pontos = Math.max(0, pontos - 5);
        document.getElementById("mensagem").textContent = "Sílaba errada! -5 pontos!";
        s.coletada = false;
        perderVida();
      }

      atualizarHUD();
    }
  }
}

// --- PERDER VIDA ---
function perderVida() {
  vidas--;
  atualizarHUD();
  if (vidas <= 0) {
    jogoRodando = false;
    clearInterval(timer);
    document.getElementById("mensagem").style.color = "red";
    document.getElementById("mensagem").textContent = "Game Over! Pontos: " + pontos;
  } else {
    silabasColetadas = [];
    portaAberta = false;
    jogador = { col: 1, lin: 1 };
    tempo = 60;
    gerarItens();
    document.getElementById("mensagem").textContent = "Perdeu uma vida!";
  }
}

// --- HUD ---
function atualizarHUD() {
  document.getElementById("pontos").textContent = pontos;
  document.getElementById("vidas").textContent = vidas;
  document.getElementById("coletado").textContent =
    silabasColetadas.length > 0 ? silabasColetadas.join("-") : "—";
}

// --- DESENHAR ---
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var lin = 0; lin < mapa.length; lin++) {
    for (var col = 0; col < mapa[0].length; col++) {

      var x = col * TAMANHO;
      var y = lin * TAMANHO;

      ctx.fillStyle = mapa[lin][col] === 1 ? "gray" : "white";
      ctx.fillRect(x, y, TAMANHO, TAMANHO);

      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(x, y, TAMANHO, TAMANHO);
    }
  }

  ctx.fillStyle = portaAberta ? "green" : "red";
  ctx.fillRect(portaCol * TAMANHO, portaLin * TAMANHO, TAMANHO, TAMANHO);

  ctx.fillStyle = "white";
  ctx.font = "bold 11px Arial";
  ctx.textAlign = "center";
  ctx.fillText(
    portaAberta ? "SAÍDA" : "PORTA",
    portaCol * TAMANHO + TAMANHO/2,
    portaLin * TAMANHO + TAMANHO/2 + 4
  );

  for (var i = 0; i < itens.length; i++) {
    var s = itens[i];
    if (s.coletada) continue;

    ctx.fillStyle = s.certa ? "blue" : "orange";
    ctx.fillRect(
      s.col * TAMANHO + 4,
      s.lin * TAMANHO + 4,
      TAMANHO - 8,
      TAMANHO - 8
    );

    ctx.fillStyle = "white";
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
      s.texto,
      s.col * TAMANHO + TAMANHO/2,
      s.lin * TAMANHO + TAMANHO/2 + 5
    );
  }

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(
    jogador.col * TAMANHO + TAMANHO/2,
    jogador.lin * TAMANHO + TAMANHO/2,
    14,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

iniciarNivel();