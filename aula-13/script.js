function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa(`Fagner`, `Ferreira`, 19);
const pessoa2 = criaPessoa(`Vagner`, `Ferreira`, 25);
const pessoa3 = criaPessoa(`Magno`, `Ferreira`, 33)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

function criaPessoa2(nome, apelido, idade){
    return {nome, apelido, idade}
}

const pessoa4 = criaPessoa2(`Eduardo`, `Dudu`, 12)
console.log(pessoa4);

console.log(`------------------------------------------`);
console.log(` `);
let pessoa5 = {
    nome: `Kakaroto`,
    sobrenome: `Goku`,
    idade: 40,

    falaOi() {
        console.log( this.nome, `Está Falando oi`)
    },

    aumentaIdade(){
        console.log(`idade: `,this.idade);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        console.log(`aumentando a idade em + 1: ${this.idade++}`);
        
    }
};

console.log(pessoa5);
pessoa5.falaOi();
pessoa5.aumentaIdade();




