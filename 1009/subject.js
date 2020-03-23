var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${(salarioFixo + vendas * 0.15).toFixed(2)}`);
