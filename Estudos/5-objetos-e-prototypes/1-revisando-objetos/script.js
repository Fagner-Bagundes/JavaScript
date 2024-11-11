const pessoa ={
    nome: `Fagner`,
    sobrenome: `Ferreira`
};

// a notação de colchetes[] é interessante pois voce pode colocar valores dinamicos

// imagine que vc não saiba qual chave voce vai colocar 
const chave = `nome`
console.log(pessoa[chave]);
console.log(pessoa[`sobrenome`]);


// Também esxiste um construtor de obj:

const pessoa1 = new Object();
pessoa1.nome = `Fagner`;
pessoa1.idade = 17;
console.log(pessoa1);
// voce pode usar o spread(...)
const pessoa2 = {...pessoa}
console.log(pessoa2);
 
// apagar uma chave especifica

delete pessoa2.nome
console.log(pessoa2);

// metodos dentro de objetos
pessoa1.maior18 = (id)=>{
    if (id>17){
        return `maior de idade`  
    } else{
        return `menor de idade`
    }
}

console.log(`${pessoa1.nome} maioridade: ${pessoa1.maior18(pessoa1.idade)}`);

