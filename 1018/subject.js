var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valorDaNota = parseInt(lines.shift());

let troco = valorDaNota;

let cem = parseInt(troco / 100);
troco = troco - cem * 100;

let cinquenta = parseInt(troco / 50);
troco = troco - cinquenta * 50;

let vinte = parseInt(troco / 20);
troco = troco - vinte * 20;

let dez = parseInt(troco / 10);
troco = troco - dez * 10;

let cinco = parseInt(troco / 5);
troco = troco - cinco * 5;

let dois = parseInt(troco / 2);
troco = troco - dois * 2;

let um = parseInt(troco);

console.log(valorDaNota);
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);
