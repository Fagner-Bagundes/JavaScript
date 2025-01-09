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

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function (params) {
    console.log(this.nome, `Está falando oi`)
}
Pessoa2.prototype.comer = function (params) {
    console.log(this.nome, `Está comendo`)
}
Pessoa2.prototype.beber = function (params) {
    console.log(this.nome, `Está Bebendo`)
}
Pessoa2.prototype.NCompleto = function (params) {
    console.log(`${this.nome} ${this.sobrenome}`)
}

const p2 = new Pessoa2(`Gabriel`, `Imbiriba`);
console.log(p2);
