// map.js

let notas = [6, 8, 7, 9, 10];

// 1. Novo array com cada nota +1 (sem passar de 10)
let notasAumentadas = notas.map(n => n + 1 > 10 ? 10 : n + 1);
console.log("Notas aumentadas:", notasAumentadas);

// 2. Transformar string em maiúsculas usando split + map + join
let palavra = "javascript";
let palavraMaiuscula = palavra
  .split("")
  .map(l => l.toUpperCase())
  .join("");
console.log("Palavra em maiúsculas:", palavraMaiuscula);
