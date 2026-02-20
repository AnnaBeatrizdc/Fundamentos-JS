// Indentificar o tipo de variável
let nome = "Ana"; //string
let idade = 18; //number
let altura = 1.65; //number
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idad);
console.log("Tipo de altura:", typeof altura);

let estaChovendo = false; //boolean - true ou false
console.log("Tipo de estáChovendo:", typeof estaChovendo);

let cidade; //undefined - ainda não foi atribuída um valor
console.log("Tipo de cidade:", typeof cidade);

let aprendendoJS = null; //object - ausência intencional de valor
console.log("Tipo de aprendendoJS:", typeof aprendendoJS);

let simbulo = Symbol(); //symbol - valor único e imutável
console.log("Tipo de simbulo:", typeof simbulo);