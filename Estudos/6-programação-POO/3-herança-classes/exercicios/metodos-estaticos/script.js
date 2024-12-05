class Calculadora {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    static somar(a, b){
        console.log(a * b);
    }
}

class CalculadoraAvancada extends Calculadora {
    static Multiplicar(a, b){
        console.log(a * b);
        
    }
}

const calcAvancada = new CalculadoraAvancada()
CalculadoraAvancada.Multiplicar(20, 20)
calcAvancada.Multiplicar(20, 10)


