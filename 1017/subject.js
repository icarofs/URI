var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const kmLitroAutomovel = 12;
let tempoNaViagem = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

let distancia = (tempoNaViagem * velocidadeMedia) / kmLitroAutomovel;

console.log(distancia.toFixed(3));
