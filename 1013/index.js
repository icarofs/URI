let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorABC} eh o maior`);
