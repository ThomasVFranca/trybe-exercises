// Exercício 5 do dia 1 do bloco 4. 

// 1. Crie um variável para armazenar o estado da pessoa candidata no processo seletivo que pode ser: 'aprovada', 'lista' ou 'reprovada'.
let state ="reprovada";

// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
switch (state) {
    
    case "aprovada":
        console.log("aprovada");
        break;

    case "lista":
        console.log("lista");
        break;
        
    case "reprovada":
        console.log("reprovada");
        break;
default:
    console.log("Não se aplica")
}