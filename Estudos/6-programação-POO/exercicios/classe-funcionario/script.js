class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.salarioDescINSS;
        this.salarioDescURRF;
        this.salarioLiquido;
    }

    calculaImpostos(){
      
    }

    calculaPorcentagem(porcentagem, deduzir) {
        let desconto = (porcentagem / 100) * this.salario;
        desconto = (desconto * 100) / 100;
        if (deduzir) desconto -= deduzir
        
        console.log(desconto);
        this.salarioDescINSS = (this.salario - desconto).toFixed(2);  
    }
    INSS(){

        if (this.salario <= 1412.00) {
            this.calculaPorcentagem(7.5)
        };

        if (this.salario > 1412.00 && this.salario <=2666.68) {
            this.calculaPorcentagem(9, 21.18)
        };

        if (this.salario >= 2666.69 && this.salario <=4000.03) {
            this.calculaPorcentagem(12)
        };

        if (this.salario >= 4000.04 && this.salario <=7786.02) {
            this.calculaPorcentagem(14)
        };

        


        
    }

    calculaBeneficios(){

    }
}

const funcionario1 = new Funcionario(`Gabriel Imbiriba`, `Palhaço`, 2666.68) 

funcionario1.INSS()
