class ValidadeCPF {
    constructor(cpf){
        this.cpf = cpf;
        this.cpfNumber = [];
        this.cpfCalculavel = [];
        this.multiplicado = []
        this.ultimoDigCPF = []
        this.resultados = []
        this.DigitosArray = []        
    };

    inicia(){
        if (this.cpfNumber.length > 11) return false;
        this.TornaCpfCalculavel()
        this.multiplicador(10, 0)
        this.cpfCalculavel.push(this.resultado(this.multiplicado[0]))
        this.multiplicador(11, 1)
        this.resultados = [this.resultado(this.multiplicado[0]), this.resultado(this.multiplicado[1])]
        this.ultimoDigCPF = this.cpfNumber.splice(-2, 2)
    } 

    TornaCpfCalculavel() {
        let cpfLimpo = this.cpf.replace(/\D+/g, ``)
        let cpfArray = Array.from(cpfLimpo);
        this.cpfNumber = cpfArray.map((valor) => parseInt(valor))
        this.cpfCalculavel = [...this.cpfNumber]
        this.cpfCalculavel.splice(-2, 2)
    };

    multiplicador(mult, i){
        let multCpf1 = this.cpfCalculavel.map((valor) => {
            let multiplicado = valor * mult
            --mult
            return multiplicado
    })
    
    this.multiplicado[i] = multCpf1
    };

    resultado(cpf) {
        let soma = cpf.reduce((acumulador, valor) => {
            return acumulador + valor
        }, 0)
        let resultado =  11 - (soma % 11)
        if(resultado >=10) resultado = 0;
        return resultado
    };

    validar(){
        this.inicia()
        let validado = true;
        for (let i = 0; i < 4; i++) {
            if (this.resultados[i] !== this.ultimoDigCPF[i]) {
                validado = false;
                break;
            }
        }
        return validado
    };
}



    








