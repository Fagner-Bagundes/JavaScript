const nomes = [`Fagner`, `Magno`, `Dylon`];

console.log(nomes[2])

nomes[1] = `Vagner`

console.log(nomes);

const frutas = new Array(`maça`, `pera`)
console.log(frutas);

let novo = nomes;

novo.push(`Jorge`)
console.log(novo);
console.log(nomes);

let novoCopia = [...frutas]

let elementoRemovido = novoCopia.pop()
console.log(novoCopia);
console.log(frutas, elementoRemovido);

console.log(`-----------------------------------------`);
const numeros = [1,2,3,4,5,6]

console.log(numeros.slice(-2));




