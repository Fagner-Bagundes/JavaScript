// Metodos estáticos só podem ser acessados dentro da classea mãe, não podem ser acessadas através de instâncias

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo de instância
    static trocaPilha(){
        console.log(`Acessado`);
        
    }
}

const controle1 = new ControleRemoto(`LG`);
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1.volume);
ControleRemoto.trocaPilha();


// ControleRemoto.trocaPilha();
