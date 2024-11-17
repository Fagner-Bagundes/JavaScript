// classe = função construtora

// Polimorfismo é uma maneira de fazer metodos se comportarem de uma maneira  diferente dentro de sub classes, que são filhas de uma classe mãe

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
    if (this.saldo < valor){
        console.log(`saldo insuficiente`);
        return
    };

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`AG/C: ${this.agencia}/${this.conta} \nSaldo R$${this.saldo.toFixed(2)}`)
}


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`saldo insuficiente: ${this.saldo}`);
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const CC1 = new CC(13, 34, 100, 100)
CC1.sacar(95)



function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const CP1 = new CP(12, 33, 100 );
CP1.sacar(101)

