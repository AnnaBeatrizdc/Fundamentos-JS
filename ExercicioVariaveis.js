//01 - Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

const nomeCompleto = "Anna Beatriz Dantas";
console.log("Olá,", nomeCompleto + "! Bem-vinda ao JavaScript!");

//02 - Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

const anoAtual = 2025;
const anoNacimento = 2007;
const idade = anoAtual - anoNacimento;
console.log("Você tem", idade, "anos.")

//03 - Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

const cidade = "Praia Grande";
const estado = "São Paulo";
const pais = "Brasil";
console.log("Você está em", cidade, "-", estado + ",", pais);

//04 - Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

const temCarteira = true;
console.log("Tipo:", typeof temCarteira);

//05 - Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0;
const deposito = 200;
const saque = 50;
saldo += deposito - saque;
console.log("Você fez um deposito de", deposito, "reais e um saque de", saque, "reais, o saldo final foi de", saldo, "reais.");

//06 - Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

const matematica = 7;
const portugues = 5;
const ciencias = 8;
const mediaFinal = (matematica + portugues + ciencias) / 3;
console.log("Sua media final foi:", mediaFinal.toFixed(2));

//07 - Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

const salario = 3000;
const aumentoSalarial = (salario * 0.10) + salario;
console.log("O seu salario sem aumento é", salario, "o seu salario com aumento é", aumentoSalarial);

//08 - Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliques = 0;
cliques++;
cliques++;
cliques++;
console.log("Total de cliques no botão:", cliques);

//09 - Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const PI = 3.14;
PI = 2;
//O erro acontece pois a declaração da variavel como const significa constante, ou seja não pode ser alterada.

//10 - Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

const mensagem = "Bia";
const numero = 16;
const juncao = mensagem + numero;
console.log("Junção da mensagem e numero", juncao);
console.log("Tipo da junção:", typeof juncao);