// pratica.js

let notas = [6, 8, 7, 9, 10];

// Média com forEach
let soma = 0;
notas.forEach(n => soma += n);
console.log("Média:", soma / notas.length);

// Novo array com notas +1 (máx 10)
let notasAumentadas = notas.map(n => Math.min(n + 1, 10));
console.log("Notas aumentadas:", notasAumentadas);

// Palavra em maiúsculas
let palavra = "javascript";
let palavraMaiuscula = palavra.split("").map(l => l.toUpperCase()).join("");
console.log("Palavra:", palavraMaiuscula);
