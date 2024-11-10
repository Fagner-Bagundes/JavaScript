// Filter -> sempre retorna uma array, com a mesma quantidade de elementos, ou menos
// função filter querer que retorner um boleano

// retorna os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
console.log(`Filtrando arrays com numeros`);


const numerosFiltrados = numeros.filter((valor) => {    
    return valor > 10
});
console.log(numerosFiltrados);
console.log(`---------------------------------------------------------------`);
console.log(`Filtrando arrays com obejtos`);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"
const pessoas = [
    {nome: `larissa`, idade: 35},
    {nome: `Fagner`, idade: 19},
    {nome: `kiko`, idade: 57},
    {nome: `João`, idade: 22},
    {nome: `Iberê`, idade: 54},
    {nome: `Guanabara`, idade: 51},
];


console.log(`nomes que tem mais de 5 letrar:`);
const nomes5  = pessoas.filter((el)=> el.nome.length >=5)
console.log(nomes5);

console.log(`pessoas que tem mais de 50 anos:`);
const velhos = pessoas.filter((el)=> el.idade > 50)

console.log(velhos);
console.log(`nomes que terminam com a`);

const terminaA = pessoas.filter((el)=> el.nome.endsWith(`a`))
console.log(terminaA);
