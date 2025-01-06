// let numeros = [2,5,6,8]

// let pares = numeros.every((valor)=> valor % 2 === 0)

// console.log(pares);

let objs = [
    {nome : `Fagner`, idade: 19},
    {nome: `vagner`, idade: 29},
    {nome: `Magno`, idade: 33}
]

const dMenor = objs.every((obj)=> obj.idade < 18)
const dMaior = objs.every((obj)=> obj.idade > 18)
console.log(dMenor, dMaior);
