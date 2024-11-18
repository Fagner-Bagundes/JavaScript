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

const cel1 = new Celular(`Nokia`, `black`)
cel1.ligar()
console.log(cel1);






class Tablet extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    // ligar(){
    //     console.log(`Ligar foi alterado`)
    // }
}

const tablet1 = new Tablet(`Ipad`, `rose`, `Aple`)
tablet1.ligar()
console.log(tablet1);


