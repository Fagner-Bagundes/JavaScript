// Metodos estáticos só podem ser acessados dentro da classea mãe, não podem ser acessadas através de instâncias

// métodos estáticos não podem acessar o this da classe, pois o método não é atribuido a palavra new, que é o objeto do this

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // metodo de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo de Estático
    static soma(x, y){
        return x + y
        
    }
}

const controle1 = new ControleRemoto(`LG`);
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1.volume);
console.log(ControleRemoto.soma(10, 20));



// ControleRemoto.trocaPilha();
