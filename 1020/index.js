let idadeEmDias = parseInt(prompt());

let anos = parseInt(idadeEmDias / 365);
idadeEmDias %= 365;

let meses = parseInt(idadeEmDias / 30);
idadeEmDias %= 30;

let dias = parseInt(idadeEmDias);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
