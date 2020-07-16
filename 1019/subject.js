var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let tempoEmSegundos = parseInt(lines.shift());

let horas = parseInt(tempoEmSegundos / 3600);
tempoEmSegundos = tempoEmSegundos % 3600;

let minutos = parseInt(tempoEmSegundos / 60);
tempoEmSegundos = tempoEmSegundos % 60;

let segundos = parseInt(tempoEmSegundos);

console.log(`${horas}:${minutos}:${segundos}`);
