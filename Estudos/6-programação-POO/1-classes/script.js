class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){console.log(this.nome, `Está falando oi`)};
    comer(){console.log(this.nome, `Está comendo`)};
    beber(){console.log(this.nome, `Está Bebendo`)};
    NCompleto(){console.log(`${this.nome} ${this.sobrenome}`)};

}

const p1 = new Pessoa(`Fagner`, `Ferreira`)
console.log(p1);
