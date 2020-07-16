let tempoEmSegundos = parseInt(prompt());

let horas = parseInt(tempoEmSegundos / 3600);
tempoEmSegundos = tempoEmSegundos % 3600;

let minutos = parseInt(tempoEmSegundos / 60);
tempoEmSegundos = tempoEmSegundos % 60;

let segundos = parseInt(tempoEmSegundos);

console.log(`${horas}:${minutos}:${segundos}`);
