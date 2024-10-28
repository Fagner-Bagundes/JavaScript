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

