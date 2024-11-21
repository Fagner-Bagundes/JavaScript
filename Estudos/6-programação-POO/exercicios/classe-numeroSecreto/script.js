
class JogoSecreto {
    constructor(palpite) {
        this.palpite = palpite;
        this.numeroSecreto
        this.verificaPalpite()
        console.log(this.numeroSecreto);
    }

    geraNumeroSecreto(){ this.numeroSecreto = parseInt(Math.random() * 10);}
    
    verificaPalpite(){
        this.numeroSecreto = 4
        if (this.palpite < this.numeroSecreto) console.log(`O numero secreto é maior!!`);
        if (this.palpite > this.numeroSecreto) console.log(`O numero secreto é maior!!`);
        if (this.palpite === this.numeroSecreto){
            console.log(`Você acertou o numero secreto!!!!`); 
            this.geraNumeroSecreto()
        } 


    }
}







const jogo1 = new JogoSecreto(4)