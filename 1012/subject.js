var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.replace("\n", " ");
var lines = input.split(" ");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * (c * c)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
