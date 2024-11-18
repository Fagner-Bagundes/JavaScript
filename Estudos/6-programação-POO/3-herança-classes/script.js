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

const nokia = new Celular(`Nokia`, `black`)
nokia.ligar()
console.log(nokia);
