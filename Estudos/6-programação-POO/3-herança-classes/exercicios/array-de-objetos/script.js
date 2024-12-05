class Animal {
    constructor(nome) {
        this.nome = nome
    }

    falar(){

    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome)
    }
    falar(){
        console.log(`${this.nome} Está falando: Miau!!`);
    }
}

class Cachorro extends Animal {
    constructor(nome){
        super(nome)
    }
    falar(){
        console.log(`${this.nome} Está falando: Au au!!`);
    }
}
const gato = new Gato(`Nino`)
const cachorro = new Cachorro(`Billy`)

const animais = [gato, cachorro]

animais.map((animal)=>{
    animal.falar()
})