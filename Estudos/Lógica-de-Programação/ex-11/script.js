const pessoa = {
    nome: `Fagner`,
    sobrenome: `Ferreira`,
    idade: 19,
    endereco: { 
        rua: `Dr. Braulino`,
        numero: 764
    }
}

// modo 1
const {nome, sobrenome, idade} = pessoa
console.log(nome, sobrenome, idade);

// modo 2

const {nome: N, sobrenome: SN, idade:ID} = pessoa
console.log(N,SN,ID);

// modo 3

const {nome: nome2, endereco: {rua, numero} } = pessoa
console.log(nome2, rua, numero);

// rest oparator