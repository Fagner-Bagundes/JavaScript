class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        return this.ligado = true;
    }
    desligar(){
        if (!this.ligado) {
         console.log(`${this.nome} já está desligado`);
         return   
        }
        return this.ligado = false;
    }
};

class Celular extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome)
        this.cor = cor;
    }
}
const _ano = Symbol();
class CelularOld extends Celular {
    constructor(nome, cor){
        super(nome, cor)
        this[_ano] = 0;
    };

    get ano(){
        return this[_ano] 
    };

    set ano(ano){
        if (typeof ano != `number`) { 
            console.log(`ano invalido`) 
            return
        }
    }

    mostraAno(){
        if (this[_ano] > 1999) console.log(`Este celular é dos anos 2000`);
        if (this[_ano]< 2000) console.log(`Este celular é dos anos 90`);
    }
}

const old1 = new CelularOld(`Nokia`, `red`, 1999 )
console.log(old1);
old1.ano = 1999;
old1.mostraAno(1999)