class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.vINSS;
        this.vIRRF;
        this.salarioDescINSS;
        this.salarioDescIRRF;
    }

    calculaImpostos(){
      this.INSS()
      this.IRRF()
      this.mostraResultado()
      
    }

    INSS(){
        if (this.salario <= 1412.00) this.calculaPorcentagemINSS(7.5);
        if (this.salario > 1412.00 && this.salario <=2666.68) this.calculaPorcentagemINSS(9, 21.18);
        if (this.salario >= 2666.69 && this.salario <=4000.03) this.calculaPorcentagemINSS(12, 101.18);
        if (this.salario >= 4000.04 && this.salario <=7786.02) this.calculaPorcentagemINSS(14, 181.18);
    }

    IRRF(){

        if (this.salario >2259.20 && this.salario <=2826.65) this.calculaPorcentagemIRRF(7.5);
        if (this.salario >= 2866.66 && this.salario <=3751.05) this.calculaPorcentagemIRRF(15);
        if (this.salario >= 3751.06 && this.salario <=4.664,68) this.calculaPorcentagemIRRF(22.5);
        
    }

    calculaPorcentagemINSS(porcentagem, deduzir) {
        let desconto = (porcentagem / 100) * this.salario;
        desconto = (desconto * 100) / 100;
        this.vINSS = desconto
        if (deduzir) desconto -= deduzir
        this.salarioDescINSS = (this.salario - desconto).toFixed(2);  
    }

    calculaPorcentagemIRRF(porcentagem) {
        let desconto = (porcentagem / 100) * this.salario;
        desconto = (desconto * 100) / 100;
        this.vIRRF = desconto
        this.salarioDescIRRF = (this.salario - desconto).toFixed(2);  
    }

    mostraResultado(){
        console.log(`Esse é o restultado do cálculo do salário liquido: `);
        console.log(`salário Bruto: ${this.salario}`);
        console.log(` `);
        console.log(`DESCONTO INSS`);
        console.log(`valor: ${this.vINSS}`);
        console.log(`salário com desconto: ${this.salarioDescINSS}`);
        console.log(` `);
        console.log(`DESCONTO IRRF`);
        console.log(`valor: ${this.vIRRF}`);
        console.log(`salário com desconto: ${this.salarioDescIRRF}`);
        console.log(` `);
        console.log(`Salário Liquido: ${this.salarioDescIRRF}`);
        

    }
}

const funcionario1 = new Funcionario(`Gabriel Imbiriba`, `Palhaço`, 1900) 

funcionario1.calculaImpostos()
