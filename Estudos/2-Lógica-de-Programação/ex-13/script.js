// Percorrendo um array com for in
console.log(` percorrendo uma array com for in`);
const frutas = [`maça`, `pera`, `uva`]

for (let indice in frutas){
    console.log(indice, frutas[indice]);
}

// Percorrendo um objeto com for in
console.log(` percorrendo um objeto com for in`);

const pessoa = {
    nome: `Fagner`,
    sobrenome: `Ferreira`,
    idade: 10
}

for ( let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`)
}