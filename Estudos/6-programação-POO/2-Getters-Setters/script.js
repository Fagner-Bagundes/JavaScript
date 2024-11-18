// Algo muito comuno em projetos é que existem muitos objetos e existem muitos programadores em um projeto


// imagine que um programador atribua sem querer a velocidade a 1500, causaria um erro, para previnir isso, voce deve criar a velocidade como privada e tusar getters e setters

class Carro {
    constructor(nome){
        this.nome = nome,
        this.velocidade = 0
    }

    acelerar(){
        if (this.velocidade >=100) return
        this.velocidade++;
    }

    freiar(){
        if (this.velocidade <= 0) return
            this.velocidade--   
    }
}

const c1 = new Carro(`Fusca`)

for (let i = 0; i<=200; i++) {
    c1.acelerar()
    console.log(c1.velocidade);
    
    
}