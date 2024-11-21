class Aluno {
    constructor(matricula, nome, ...notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
        console.log(this.notas);
        
    }


    calculaMedia(){
        let SomaMedia = this.notas.reduce((ac, valor)=>{
              return ac += valor;
        }, 0);
        return SomaMedia / this.notas.length;
    }

    ReprovaOuPassa(){
        if (this.calculaMedia() < 30) return console.log(`Aluno Reprovado`);
        console.log(`Aluno aprovado`);
    }

    situa


}


const aluno1 = new Aluno(10, `Fagner`, 30, 20 ,30)
aluno1.calculaMedia()
aluno1.ReprovaOuPassa()