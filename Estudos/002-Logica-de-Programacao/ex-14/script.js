const nome = `Fagner Ferreira`;

// mostrando o valor da variavel com for clássico
for (let i=0; i<nome.length; i++) {
    console.log(nome[i])
}

console.log(`---------------------------------------------`);

// mostrando o valor da variavel com for in

for(let i in nome){
    console.log(nome[i]);
}


console.log(`---------------------------------------------`);
// mostrando o valor da variavel com for of
for (let valor of nome){
    console.log(valor); 
}


console.log(`---------------------------------------------`);
// percorrendo uma array com for of

const estadosH2O = [`Solido`, `Gasoso`, `Liquido`];

for(valor of estadosH2O){
    console.log(valor)
}