class Animal {
    constructor(especie) {
        this.especie = especie
    }
    som(){
        `Este animal faz um som`
    }
}

class Mamifero extends Animal {
    constructor(especie) {
        super(especie)
    }

}

class Cahorro extends Mamifero {
    constructor(especie) {
        super(especie)
    }
    som(){
        console.log(`O `, this.especie,`Late`);
        
    }
}

const cachorro = new Cahorro(`Viralata`)
cachorro.som()