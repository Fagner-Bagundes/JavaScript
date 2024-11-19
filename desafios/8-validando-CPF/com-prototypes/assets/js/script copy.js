class ValidadeCPF {
    constructor(cpf){
        this.cpf = cpf;
        this.cpfNumber = 0;
        this.cpfCalculavel;
        this.multiplicado = []
        this.ultimoDigCPF = 0
        this.resultados = 0
        this.final = `oii`
        
        if (this.cpfNumber.length > 11){
            console.log(`oiii`);
        } else{
            this.inicia()
        }
        
    };

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
        // soma
        let soma = cpf.reduce((acumulador, valor) => {
            return acumulador + valor
        }, 0)

        // divisão
        let resultado =  11 - (soma % 11)
        if(resultado >=10) resultado = 0;
        return resultado
    };
    
    validacaoFinal(invalido, ac) {

        if (invalido) {
            this.final = false
            console.log(`falso`);
            
        } else if(invalido){
            this.final = true
            console.log(`vdd`);
        }
        
        
        }

    inicia(){
        if (this.cpfNumber.length > 11) return false;
        this.TornaCpfCalculavel()
        this.multiplicador(10, 0)
        this.cpfCalculavel.push(this.resultado(this.multiplicado[0]))
        this.multiplicador(11, 1)
        this.resultados = [this.resultado(this.multiplicado[0]), this.resultado(this.multiplicado[1])]

        this.ultimoDigCPF =  this.cpfNumber.splice(-2, 2)
        for(let i in this.ultimoDigCPF){
            this.resultados[i] === this.ultimoDigCPF[i] ? this.validacaoFinal(false) :  this.validacaoFinal(true)      
        }
    } 
}


const cpfValido = new ValidadeCPF(`064.794.352-22`)

// console.log(cpfValido);
console.log(` `);



cpfValido.validacaoFinal()
console.log(cpfValido.final);

// console.log(cpfValido.final);












    








