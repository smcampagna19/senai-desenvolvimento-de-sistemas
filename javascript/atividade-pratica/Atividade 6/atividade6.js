const IDADE_MINIMA = 18;

function verificarCadastro() {
    const nome  = document.getElementById("nome").value;
    const idade = Number(document.getElementById("idade").value);

    if (idade >= IDADE_MINIMA) {
        document.getElementById("resultado").innerHTML = "Cadastro APROVADO para " + nome + "!";
    } else {
        const faltam = IDADE_MINIMA - idade;
        document.getElementById("resultado").innerHTML = "Cadastro NEGADO para " + nome + ". Faltam " + faltam + " ano(s).";
    }
}
