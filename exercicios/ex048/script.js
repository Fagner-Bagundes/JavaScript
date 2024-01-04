// //   dobre os números
// const numeros = [ 5, 50, 80, 1, 2, 3, 5, 6, 7, 111, 15, 22, 27];

// const numerosEmDobro = numeros.map((valor) =>{
//   return valor * 2                                                                  
// });

// console.log(numerosEmDobro);
 
const pessoas = [
  { nome: `Luiz`, idade: 62 },
  { nome: `Maria`, idade: 23 },
  { nome: `Eduardo`, idade: 55 },
  { nome: `Letícia`, idade: 19 },
  { nome: `Rosana`, idade: 32 },
  { nome: `Wallace`, idade: 47 }
];

const Npessoas = pessoas.map((obj) =>{
  return obj.nome;
})

const RNpessoas = pessoas.map((obj)=> {
  return {idades: obj.idade};
  
});



const comIds = pessoas.map((obj, indice) => {
  const newObj = {...obj};
  newObj.id = indice + 1;
  return newObj;
}); 


console.log(pessoas);
console.log(comIds);
