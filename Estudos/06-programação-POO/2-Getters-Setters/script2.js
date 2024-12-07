const _Ncompleto = Symbol()

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this[_Ncompleto] = this[_Ncompleto] = `${this.nome} ${this.sobrenome}`
    }
    get nomeCompleto(){
     return this[_Ncompleto]
    } 

    set nomeCompleto(valor){
        valor = valor.split(` `)
        this[_Ncompleto] = valor
    }
}

const p1 = new Pessoa(`Fagner`, `Ferreira`)
p1.nomeCompleto = `Vaginaldo Ferreira`
console.log(p1);
console.log(` `);
console.log(p1.nomeCompleto);


