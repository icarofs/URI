var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var oneLine = lines.shift().split(" ");

let a = parseInt(oneLine[0]);
let b = parseInt(oneLine[1]);
let c = parseInt(oneLine[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorABC} eh o maior`);
