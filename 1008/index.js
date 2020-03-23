let numeroFuncionario = parseInt(prompt());
let horasTrabalhadasFuncionario = parseInt(prompt());
let ValorFuncionarioHora = parseFloat(prompt());

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(
  `SALARY = U$ ${(horasTrabalhadasFuncionario * ValorFuncionarioHora).toFixed(
    2
  )}`
);
