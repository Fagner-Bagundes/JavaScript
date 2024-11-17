function criaPessoa(nome, sobrenome) {
    const pessoaPrototye = {
        falar() {
            console.log(`${this.nome} está falando`);
        },

        comer(){
            console.log(`${this.nome} está comendo`);
        },

        beber(){
            console.log(`${this.nome} está bebendo`);
        }

    }
    return Object.create(pessoaPrototye, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa(`Fagner`, `Ferreira`)
console.log(p1);



