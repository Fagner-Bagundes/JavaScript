let pessoas = [
    { nome: `Fagner`, idade: 18},
    { nome: `Francisco`, idade: 56},
    { nome: `Franci`, idade: 35},
    { nome: `Magno`, idade: 32}
];


const maisVelho = pessoas.reduce((ac, value)=>{
    if (ac.idade > value.idade) return ac
    return value
})
console.log(maisVelho);
 