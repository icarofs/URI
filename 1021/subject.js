var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valorMonetario = parseFloat(lines.shift());
let notas = parseInt(valorMonetario);
let moedas = parseInt((valorMonetario - notas) * 100);

const notas100 = parseInt(notas / 100);
notas -= notas100 * 100;
const notas50 = parseInt(notas / 50);
notas -= notas50 * 50;
const notas20 = parseInt(notas / 20);
notas -= notas20 * 20;
const notas10 = parseInt(notas / 10);
notas -= notas10 * 10;
const notas5 = parseInt(notas / 5);
notas -= notas5 * 5;
const notas2 = parseInt(notas / 2);
notas -= notas2 * 2;

const moedas1 = parseInt(notas);
notas -= moedas1 * 1;
const moedas50 = parseInt(moedas / 50);
moedas -= moedas50 * 50;
const moedas25 = parseInt(moedas / 25);
moedas -= moedas25 * 25;
const moedas10 = parseInt(moedas / 10);
moedas -= moedas10 * 10;
const moedas05 = parseInt(moedas / 5);
moedas -= moedas05 * 5;
const moedas01 = parseInt(moedas);

console.log("NOTAS:");
console.log(notas100 + " nota(s) de R$ 100.00");
console.log(notas50 + " nota(s) de R$ 50.00");
console.log(notas20 + " nota(s) de R$ 20.00");
console.log(notas10 + " nota(s) de R$ 10.00");
console.log(notas5 + " nota(s) de R$ 5.00");
console.log(notas2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(moedas1 + " moeda(s) de R$ 1.00");
console.log(moedas50 + " moeda(s) de R$ 0.50");
console.log(moedas25 + " moeda(s) de R$ 0.25");
console.log(moedas10 + " moeda(s) de R$ 0.10");
console.log(moedas05 + " moeda(s) de R$ 0.05");
console.log(moedas01 + " moeda(s) de R$ 0.01");
