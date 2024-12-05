class Banco{
    #logTrasacao(){
        console.log(`trasaçao registrada`);
        
    }
    logTransacao(){
        this.#logTrasacao()
    }
}

class Conta extends Banco{
    depositar(){
        this.logTransacao()
    }
}
const conta1 = new Conta()
conta1.depositar()