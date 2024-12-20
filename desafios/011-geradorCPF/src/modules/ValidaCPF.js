// 705.484.450-52 070.987.720-03

export default class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        });
    };

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemdigitos) {
        let total = 0;
        let reverso = cpfSemdigitos.length + 1;

        for (let stringNumerica of cpfSemdigitos){
            // console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso--
            
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? digito : `0`
    }

    valida(){

        this.geraNovoCpf()
        
        if(!this.cpfLimpo) return false;;
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.cpfLimpo.length !== 11) return false;
        return true   
    }
}



