//01 - Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.
const idade = 15;
const maiorDeIdade = idade >= 18;
console.log("É maior de idade?", maiorDeIdade);

//02 - Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
const n1 = 10;
const n2 = 5;
const media = (n1 + n2) / 2;
const resultado = (media >= 7)?"Aprovado":"Reprovado";
console.log("O aluno esta:", resultado);

//03 - Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
const valorCompra = 35.90;
const valorPago = 50;
const troco = valorPago - valorCompra;
console.log("O troco a ser devolvido é:", troco.toFixed(2));

//04 - Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
const senha1 = "123456";
const senha2 = "123456";
const senhasIguais = senha1 === senha2;
console.log("As senhas são iguais?", senhasIguais);

//05 - Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
const totalAulas = 80;
const faltas = 25;
const percentualFaltas = (faltas / totalAulas) * 100;
const faltasUltrapassam = percentualFaltas > 25;
console.log("As faltas ultrapassam 25% das aulas?", faltasUltrapassam);

//06 - Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.
const temLogin = true;
const temSenha = false;
const podeAcessar = temLogin && temSenha;
console.log("O usuário pode acessar o sistema?", podeAcessar);

//07 - Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponível = true;
console.log("Esta disponivel?", !disponível);

//08 - Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.
const num1 = 4;
const num2 = 8;
const ambosPares = (num1 % 2 === 0) && (num2 % 2 === 0);
const numerosIguais = num1 === num2;
console.log("Ambos os números são pares?", ambosPares);
console.log("Os números são iguais?", numerosIguais);

//09 - Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
const percentual = 15;
const valor = 120;
const resultadoDoCalculo = (percentual / 100) * valor;
console.log(`${percentual}% de ${valor} é igual a ${resultadoDoCalculo}.`);

//10 - Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
const expressao = 2 + 3 * 5;
console.log("O resultado da expressão 2 + 3 * 5 é:", expressao);
//A multiplicação foi feita antes da soma devido à regra de precedência dos operadores matemáticos, onde a multiplicação tem prioridade sobre a adição.