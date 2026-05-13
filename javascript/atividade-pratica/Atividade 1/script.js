function calcularMedia() {
 
    const MEDIA_MINIMA = 7;

    const n1 = Number (document.getElementById('nota1').value);
    const n2 = Number (document.getElementById('nota2').value);
    const n3 = Number (document.getElementById('nota3').value);

 
    const mediaFinal = (n1 + n2 + n3) / 3;

 
    const elementoResultado = document.getElementById('resultado');
    
    if (mediaFinal >= MEDIA_MINIMA) {
        elementoResultado.innerHTML = `Média: ${mediaFinal.toFixed(1)} - <span style="color: green;">APROVADO</span>`;
    } else {
        elementoResultado.innerHTML = `Média: ${mediaFinal.toFixed(1)} - <span style="color: red;">REPROVADO</span>`;
    }
}