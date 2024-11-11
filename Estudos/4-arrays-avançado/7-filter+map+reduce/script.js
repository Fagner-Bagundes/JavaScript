console.log(`Unindo Filter, Map e Reduce`);
console.log(` `);

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [1,4,35,6,17,3,9,58,90,10]
console.log(`Array original:`);
console.log(numeros);
console.log(` `);

console.log(`Filtrando os pares:`);
const pares = numeros.filter((num)=> num % 2 === 0)
console.log(pares);
console.log(` `);

console.log(`Dobrando os valores dos pares:`);
let dobro = pares.map((num)=> num *2)
console.log(dobro);
console.log(` `);

console.log(`Somando todos os valores:`);
let soma = dobro.reduce((acumulador, valor)=> acumulador + valor)
console.log(soma);




