/*❌ Codigo Não Limpo
let a = [1, 2, 3, 4, 5];
let s=0;
for (let i=0; i < a.length; i++) {
s += a[i];
}
console.log(s/a.length);
*/

//✅ Codigo Limpo
let notas = [1, 2, 3];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Media:", media);