let aluno = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < aluno.length; i++) {
    let soma = 0;
    for (let j = 0; j < aluno[i].length; j++) {
        soma += aluno[i][j];
    }
    let media = soma / aluno[i].length;
    console.log("A média do aluno " + (i + 1) + " é: " + media);
}

