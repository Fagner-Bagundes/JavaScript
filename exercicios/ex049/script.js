// const numeros = [ 5, 50, 80, 1, 2, 3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, [ ]);

// console.log(total);


//  retorne a pessoa mais velha

const pessoas = [ 
    {nome: `Fagner`, idade: 18},
    {nome: `Raimundo`, idade: 54},
    {nome: `Fabrício`, idade: 23},
    {nome: `Vagner`, idade: 88},
    {nome: `Eduardo`, idade: 23},
    {nome: `Roberto`, idade: 15}
    
];

const PessoaMVelha = pessoas.reduce(function(acumulador,valor){
    if (acumulador.idade > valor.idade ) 
        return acumulador;
    return valor;
}, 0);

console.log(PessoaMVelha);