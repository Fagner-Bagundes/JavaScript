class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

class Estudande extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e estudo: ${this.curso}`);
    }   
}

const estudante1 = new Estudande(`Fagner`, 19, `ADS-Analise e Desenvolvimento de Sistemas`)
const pessoa1 = new Pessoa(`Fagner`, 19)
pessoa1.apresentar()
estudante1.apresentar()