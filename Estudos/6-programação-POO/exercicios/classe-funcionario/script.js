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

    INSS(){
        if (this.salario <= 1412.00) this.calculaPorcentagemINSS(7.5);
        if (this.salario > 1412.00 && this.salario <=2666.68) this.calculaPorcentagemINSS(9, 21.18);
        if (this.salario >= 2666.69 && this.salario <=4000.03) this.calculaPorcentagemINSS(12, 101.18);
        if (this.salario >= 4000.04 && this.salario <=7786.02) this.calculaPorcentagemINSS(14, 181.18);
    }
    calculaPorcentagemINSS(porcentagem, deduzir) {
        let desconto = (porcentagem / 100) * this.salario;
        desconto = (desconto * 100) / 100;
        if (deduzir) desconto -= deduzir
        this.salarioDescINSS = (this.salario - desconto).toFixed(2);  
    }


    URRF(){
        if (this.salario <= 1412.00) this.calculaPorcentagemINSS(7.5);
        if (this.salario > 1412.00 && this.salario <=2666.68) this.calculaPorcentagemINSS(9, 21.18);
        if (this.salario >= 2666.69 && this.salario <=4000.03) this.calculaPorcentagemINSS(12, 101.18);
        if (this.salario >= 4000.04 && this.salario <=7786.02) this.calculaPorcentagemINSS(14, 181.18);
    }


    calculaPorcentagemURRF(porcentagem, deduzir) {
        let desconto = (porcentagem / 100) * this.salario;
        desconto = (desconto * 100) / 100;
        if (deduzir) desconto -= deduzir
        this.salarioDescINSS = (this.salario - desconto).toFixed(2);  
    }

    calculaBeneficios(){

    }
}

const funcionario1 = new Funcionario(`Gabriel Imbiriba`, `Palhaço`, 1900) 

funcionario1.INSS()
