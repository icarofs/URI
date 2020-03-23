var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.replace("\n", " ");
var lines1 = input.split(" ");
var lines2 = input.split(" ");

let pecaUm = parseInt(lines1[0]);
let numeroPecasUm = parseFloat(lines1[1]);
let valorUnitarioPecaUm = parseInt(lines1[2]);

let pecaDois = parseInt(lines2[0]);
let numeroPecasDois = parseFloat(lines2[1]);
let valorUnitarioPecaDois = parseInt(lines2[2]);

let resultado =
  numeroPecasUm * valorUnitarioPecaUm + numeroPecasDois * valorUnitarioPecaDois;

console.log(`O VALOR A PAGAR: R$ ${resultado.toFixed(2)}`);
