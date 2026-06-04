// forEach.js

let notas = [6, 8, 7, 9, 10];

// Soma e média com forEach
let soma = 0;
notas.forEach(n => soma += n);
console.log("Média:", soma / notas.length);

// Exibir notas
notas.forEach((n, i) => console.log(`Nota ${i+1}: ${n}`));
