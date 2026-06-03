let idades = [];

for (let i = 0; i < 7; i++){
    let idade = parseInt(prompt("Por favor digite a idade da pessoa " + (i + 1) + ":")); //i + 1 para mostrar a posição certa  
    idades[i] = idade; //armazena as idades
}
let posicoes = "";
for (let i = 0; i < 7; i++){ 
    if (idades[i] > 25){ //verifica se a idade é maior que 25
        posicoes += (i + 1) + " "; //armazena as posições das pessoas com mais de 25 anos
    } 
} 
if (posicoes === ""){ //verifica se não tem pessoas com mais de 25 anos
    alert("Não tem pessoas com mais de 25 anos");
} else {
    alert("As pessoas com mais de 25 anos estão nas posições: " + posicoes);
}