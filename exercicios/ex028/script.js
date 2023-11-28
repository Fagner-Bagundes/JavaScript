const pessoa = {
    nome: `Fagner`,
    sobrenome: `Ferreira`,
    idade: 18
};


for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}