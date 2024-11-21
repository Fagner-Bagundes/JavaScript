class JogoSecreto {
    constructor(palpite) {
        this.palpite = palpite
        this.numeroSecreto = parseInt((Math.random() * 10 + 1 ));
        this.verificaPalpite()
        console.log(this.numeroSecreto);
        
    }


    geraNumero
    verificaPalpite(){
        if (this.palpite < this.numeroSecreto) console.log(`O numero secreto é maior!!`);
        if (this.palpite > this.numeroSecreto) console.log(`O numero secreto é maior!!`);
        if (this.palpite === this.numeroSecreto) console.log(`Você acertou o numero secreto!!!!`); 
    };



}

const jogo1 = new JogoSecreto(5)