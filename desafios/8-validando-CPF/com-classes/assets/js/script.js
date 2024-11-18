// 705.484.450-52 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        });
    };

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimppo.slice(0, -2)
        const digito1 = this.geraDigitos(cpfSemDigitos);
    }

    geraDigito(cpfSemdigitos) {
        let total = 0;
        let reverso = cpfSemdigitos.length + 1
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.cpfLimpo.length !== 11) return false;
        this.geraNovoCpf()
        return `cheguei aqui` 
    }
}

const validaCPF = new ValidaCPF(`070.987.720-03`)

console.log(validaCPF.valida());
