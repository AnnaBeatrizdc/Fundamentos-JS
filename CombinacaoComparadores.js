const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH //AND (e)
console.log("Pode dirigir?", podeDirigir);

const podeViajarSozinha = maiorDeIdade || possuiCNH; //OR (ou)
console.log("Pode viajar sozinha?", podeViajarSozinha);

const precisaDeAcompanhante = !maiorDeIdade; //NOT (inverter o valor)
console.log("Precisa de acompanhante?", precisaDeAcompanhante);