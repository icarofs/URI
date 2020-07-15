const kmLitroAutomovel = 12;
let tempoNaViagem = parseInt(prompt());
let velocidadeMedia = parseInt(prompt());

let distancia = (tempoNaViagem * velocidadeMedia) / kmLitroAutomovel;

console.log(distancia.toFixed(3));
