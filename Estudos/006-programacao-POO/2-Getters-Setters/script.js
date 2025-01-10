// Algo muito comuno em projetos é que existem muitos objetos e existem muitos programadores em um projeto


// imagine que um programador atribua sem querer a velocidade a 1500, causaria um erro, para previnir isso, voce deve criar a velocidade como privada e tusar getters e setters


// a gente pode criar uma atributo da classe, privada, que ninguém pode acessar, nimguém pode alterar, apenas dentro da classe

// pode tbm criar getters e setters para verificar se o valor é aceitável

// use symbol, é usado para criar uma chave  privada dentro do objeto
const _velocidade = Symbol(`Velocidade`)
class Carro {
    constructor(nome){
        this.nome = nome,
        this[_velocidade] = 0
    }

    get velocidade(){
        return this[_velocidade] 
    }

    set velocidade(valor){
        if (typeof valor !== `number`) return;
        if (valor> 100 || valor<0) return;
        this[_velocidade] = valor
    }

    acelerar(){
        if (this[_velocidade] >=100) return
        this[_velocidade]++;
    }

    freiar(){
        if (this[_velocidade] <= 0) return
            this[_velocidade]--   
    }
}

const c1 = new Carro(`Fusca`)

// for (let i = 0; i<=200; i++) {
//     c1.acelerar()

// }
// já que voce criou o symbol, não pode mais acessar a chave velocidade
// para poder acessar, vc deve usar getter e setter
c1.velocidade = 99
console.log(c1);

console.log(c1.velocidade);


