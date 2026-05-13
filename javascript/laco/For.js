let notas = [7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log("A média é: " + media);