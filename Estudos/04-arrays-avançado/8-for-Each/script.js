// é uma forma diferente de iterar sobre arrays, já sabemos o for clássico, for in, for of
// ele é reservado a apenas arrays


const a1 = [10,20,30,40,50,60,70,80,90];

// for(let v of a1){
//     console.log(v);
    
// };

a1.forEach((valor, indice, array)=>{
    console.log(`índice: ${indice} valor: ${valor}`);
    
})
let total = 0;
let soma = a1.forEach((valor)=>{
    total += valor
})

console.log(total);



