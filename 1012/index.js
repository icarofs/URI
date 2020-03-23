let a = parseFloat(prompt()).toFixed(2);
let b = parseFloat(prompt()).toFixed(2);
let c = parseFloat(prompt()).toFixed(2);

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * (c * c)).toFixed(3)}`);
console.log(`TRAPEZIO: ${((a + b) * c) / 2}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
