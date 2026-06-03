let numeros = [];

for (let i = 0; i < 15; i++){
    let numero = parseInt(prompt("Por favor digite o número desejado: " + (i + 1) + ":")); //i + 1 para mostrar a posição certa
    numeros[i] = numero;//armazena os números
} 
let posicoes = "";
for (let i = 0; i < 15; i++){
    if (numeros[i] % 10 === 0){ //verifica se o número é múltiplo de 10
        posicoes += (i + 1) + " "; //armazena as posições dos números múltiplos de 10
    } 
} 
if (posicoes === ""){ //verifica se não tem números múltiplos de 10
    alert("Não tem números múltiplos de 10");
} else {
    alert("Os números múltiplos de 10 estão nas posições: " + posicoes);
} 