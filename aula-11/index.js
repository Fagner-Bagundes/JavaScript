// Criando um Array:
let nomes = [`Fagner`,`Nalda`,`Francisco`]
console.log(nomes)
// alterando um indice da Array:
nomes[0] = `Francico`
console.log(nomes);
// Adicionando um  novo indice:
nomes[3] = `Fagner`
console.log(nomes)
// adcionando mais um elemento no final com a funcão push()
nomes.push(`Magno`)
console.log(nomes);
// Adicionando um elemento no incio com a funcão unshift():
nomes.unshift(`Vagner`)
console.log(nomes);
// Removendo o ultimo elemento com a funcao pop()
nomes.pop()
console.log(nomes);
// Removendo o primeiro elemento com a funcao shift()
nomes.shift()
console.log(nomes);
// Fatiando uma parte da Array com o slice()
let fatiado = nomes.slice(0,2)
console.log(fatiado);
// descobrindo se uma variavel é um array
let nome = `Fagnelson`
console.log(`a variavel nomes: `,nomes,`é uma Array? :`, nomes instanceof Array );
console.log(`a variavel nome: `,nome,` é uma Array?: `, nome instanceof Array)



