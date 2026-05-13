let = notas = [7, 8, 6, 9];
let = soma = 0;
let = i = 0;

while (i < notas.length) {
    soma += notas[i];
    i++;
}

let media = soma / notas.length;

console.log("A média das notas é: " + media);
