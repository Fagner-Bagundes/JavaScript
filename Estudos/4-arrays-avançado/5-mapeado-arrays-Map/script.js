// ele apenas retorna todos os valores de uma array para uma nova array, porem, ele pode modifica-los

const numeros = [5,39,43,2,3,6,7,10,89,75,24,16];


console.log(`dobrando os valores do Array:`);
console.log(numeros);
console.log(`dobrado:`);

const dobro = numeros.map((valor, indice, array)=>{
    return `valor -->`  + valor *2
});
console.log(dobro);

console.log(`--------------------------------------------------`);
console.log(`Mapeado objetos:`);
console.log(`obejtocompleto:`);




// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto
const pessoas = [
    {nome: `larissa`, idade: 35},
    {nome: `Fagner`, idade: 19},
    {nome: `kiko`, idade: 57},
    {nome: `João`, idade: 22},
    {nome: `Iberê`, idade: 54},
    {nome: `Guanabara`, idade: 51},
];
console.log(pessoas);
console.log(` `);
console.log(`retornando apenas nomes`);
let apenasNomes = pessoas.map((obj)=> obj.nome ) 
console.log(apenasNomes);
console.log(`retornando apenas idades`);
let apenasIdades = pessoas.map((obj)=>{
    return {idade: obj.idade}
});
console.log(apenasIdades);
console.log(`Adicionando uma chave id em cada objeto: `);
let novoID = pessoas.map((obj, indice)=>{
    const newObj = {...obj}
    newObj.id = indice *100
    return newObj
    // return {nome: obj.nome, idade: obj.idade, peso: obj.idade-15}

})

console.log(novoID);
console.log(`--------------------------------------------------------`);
console.log(`Array original:`);
console.log(pessoas);






