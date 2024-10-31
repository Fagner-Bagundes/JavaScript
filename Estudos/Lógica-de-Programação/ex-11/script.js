const pessoa = {
    nome: `Fagner`,
    sobrenome: `Ferreira`,
    idade: 19,
    endereço: { 
        rua: `Dr. Braulino`,
        nume: 764
    }
}

// modo 1
const {nome, sobrenome, idade} = pessoa
console.log(nome, sobrenome, idade);

// modo 2

const {nome: N, sobrenome: SN, idade:ID} = pessoa
console.log(N,SN,ID);

