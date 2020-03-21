var x1 = parseFloat(prompt());

var y1 = parseFloat(prompt());

var x2 = parseFloat(prompt());

var y2 = parseFloat(prompt());

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));
