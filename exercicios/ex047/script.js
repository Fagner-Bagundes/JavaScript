// Filter -> Sempre retornar uma array, com a mesma quantidade de elementos ou menos

//  

//  retonre os números maiores que 10

const numeros = [ 5, 50, 80, 1,2,3,4,5,6,7,8,11,15,22,27];



const numerosFiltrados = numeros.filter((valor, indice, array) => {
     return valor > 10;
}
);


// console.log(numerosFiltrados);

//  Retorne as pessoas que tem o nome com 5 letras ou mais
//  Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Letícia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 }
];

const PessoasNG = pessoas.filter(obj =>{
    if (obj.nome.length > 5 ) return obj.nome
    
});

const PessoasVelhas = pessoas.filter(obj =>{
    if (obj.idade > 50 ) return obj.idade
    
});

const pessoasA = pessoas.filter(obj =>{ 
    if (obj.nome.toLocaleLowerCase().endsWith(`a`)) {
        return obj.nome;
    }
})
console.log(`==========================`);
console.log(`Nomes com mais de 5 letras:`);
console.log(PessoasNG);
console.log(`==========================`);
console.log(`Pessoas com mais de 50 anos:`);
console.log(PessoasVelhas);
console.log(`==========================`);
console.log(`Nomes que terminam com "a":`);
console.log(pessoasA);
