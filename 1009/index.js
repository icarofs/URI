let nome = prompt();
let salarioFixo = parseFloat(prompt());
let vendas = parseFloat(prompt());

console.log(`TOTAL = R$ ${(salarioFixo + vendas * 0.15).toFixed(2)}`);
