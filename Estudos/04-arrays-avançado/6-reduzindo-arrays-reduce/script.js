// reduce é mais usada para reduzir o array a um único elemento
// ele é bastante versátel 
// com ela voce pode fazer: map, filter e reduce (não é recomendávael)


// Some todos números
// retorne um array com os pares (filte)
// retorne um array co o sobro dos valores

const numeros = [5,39,43,2,3,6,7,10,89,75,24,16];
console.log(`Array que será manipulada:`);
console.log(numeros);
console.log(` `);

console.log(`a soma dos elementos:`);

let soma = numeros.reduce((acumulador, elementoAtual)=> acumulador+= elementoAtual, 0)
console.log(soma);

console.log(` `);
console.log(`retornado os numeros pares: `);

let pares = numeros.reduce((acumulador, elementoAtual)=>{
    if (elementoAtual % 2 === 0){
        acumulador.push(elementoAtual)
    }
    return acumulador;
}, [ ])
console.log(pares);
console.log(` `);


console.log(`retornando um array com o sobro dos valores`);

let dobro = numeros.reduce((acumulador, valorAtual)=>{
    acumulador.push(valorAtual * 2)
    return acumulador
}, [])

console.log(dobro);

console.log(`Usando reduce em obejtos`);
const pessoas = [
    {nome: `larissa`, idade: 35},
    {nome: `Fagner`, idade: 19},
    {nome: `kiko`, idade: 57},
    {nome: `João`, idade: 22},
    {nome: `Iberê`, idade: 64},
    {nome: `Guanabara`, idade: 51},
];
console.log(` `);
console.log(`retornando o mais velhor`);

const maisVelho = pessoas.reduce((acumulador, valor)=>{
    if (acumulador.idade > valor.idade) return acumulador
    return valor
    
})


console.log(maisVelho);





 