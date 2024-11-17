// Usando o prototype de uma função de fábrica
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }

};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
};

// composição é quando você cria um objecto concatena vário objetos
const pessoaPrototye = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototye, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa(`Fagner`, `Ferreira`)
console.log(p1);
const p2 = criaPessoa(`Vagner`, `Ferreira`)
console.log(p2);


