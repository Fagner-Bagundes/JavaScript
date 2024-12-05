class Aluno {
    constructor(matricula, nome, ...notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calculaMedia(){
        let SomaMedia = this.notas.reduce((ac, valor)=> { return ac += valor;}, 0);
        return (SomaMedia / this.notas.length).toFixed(1);
    }

    avaliaMedia(){
        if (this.calculaMedia() < 30) return `Reprovado :(`;
        return `Aprovado :)`
    }
    situacao(){
        console.log(`Vamos ver como anda a situação escolar do Aluno ${this.nome}`);
        console.log(` `);
        console.log(`As notas do Aluno são: ${this.notas}`);
        console.log(`A média das notas do Aluno é: ${this.calculaMedia()}`);
        console.log(`Situação do Aluno: ${this.avaliaMedia()}`);
        
    }
}


const aluno1 = new Aluno(10, `Fagner`, 30, 30 ,30)

aluno1.situacao()