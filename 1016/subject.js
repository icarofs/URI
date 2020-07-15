var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let carro = parseInt(lines.shift());

let distancia = carro * 2;

console.log(`${distancia} minutos`);
