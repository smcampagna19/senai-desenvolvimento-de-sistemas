const MAX_USUARIOS = 100;
let usuariosOnline = 0;

function entrar() {
    if (usuariosOnline < MAX_USUARIOS) {
        usuariosOnline++;
        document.getElementById("contagem").innerHTML = usuariosOnline;
        document.getElementById("resultado").innerHTML = "Acesso permitido! Usuários online: " + usuariosOnline;
    } else {
        document.getElementById("resultado").innerHTML = "Servidor cheio! Máximo de " + MAX_USUARIOS + " usuários atingido.";
    }
}

function sair() {
    if (usuariosOnline > 0) {
        usuariosOnline--;
        document.getElementById("contagem").innerHTML = usuariosOnline;
        document.getElementById("resultado").innerHTML = "Usuário saiu. Usuários online: " + usuariosOnline;
    } else {
        document.getElementById("resultado").innerHTML = "Nenhum usuário para remover.";
    }
}
