var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadasFuncionario = parseInt(lines.shift());
let ValorFuncionarioHora = parseFloat(lines.shift());

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(
  `SALARY = U$ ${(horasTrabalhadasFuncionario * ValorFuncionarioHora).toFixed(
    2
  )}`
);
