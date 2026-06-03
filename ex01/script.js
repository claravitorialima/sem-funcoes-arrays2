let idades = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades[i] = idade; //armazena as idades no vetor
    soma += idade; //acumula a soma das idades
} 
let media = soma / 8;
alert("A média de idade das pessoas cadastradas é: " + media);