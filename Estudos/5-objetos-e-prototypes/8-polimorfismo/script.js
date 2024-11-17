// classe = função construtora

// Plomorfismo é uma maneira de fazer metodos se comportarem de uma maneira  diferente dentro de sub classes, que são filhas de uma classe mãe

/* 
Fazer uma classe de conta bancária;
especializar essa conta em conta poupança;
especializar essa conta em conta corrente;
*/



// SuperClass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (this.saldo < 0){
        this.verSaldo();
        return
    };

    this.saldo -= valor
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`AG/C: ${this.agencia}/${this.conta} \n Saldos R$${this.saldo.toFixed(2)}`)
}

const conta1 new Conta