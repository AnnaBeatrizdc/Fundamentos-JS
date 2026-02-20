
// Ele sobe a declaração da variável para o topo do escopo para evitar erros de referência, ultilizando 'var'.
console.log("Minha idade é:", idade); // undefined devido ao hoisting.

// variavel global não pode ser referenciada antes da declaração, var pode, let e const não podem.
var idade = 5;

console.log("Idade após declaração:", idade);