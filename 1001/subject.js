var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valor1 = parseInt(lines.shift());
var valor2 = parseInt(lines.shift());

console.log(`X = ${valor1 + valor2}`);
