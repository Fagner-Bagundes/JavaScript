const saldo = Symbol(`saldo`)


class ContaBancaria {
    constructor(nConata, titular) {
        this.nConta = nConata;
        this.titular = titular;
        this[saldo] = 0
        this.aprensetar()
    }

    aprensetar(){
        console.log(`Seja bem vindo!!! ${this.titular}`);
        console.log(`O numero da sua conta é: ${this.nConta}, Titular da conta: ${this.titular}`);
        console.log(` `);
    }

    depositar(valor){
        console.log(`Seu saldo: ${this[saldo]}`);
        console.log(`Você acabou de depositar: ${valor}`);
        this[saldo] += valor;
        console.log(`Seu saldo atual é de ${this[saldo]}`);
        console.log(` `);
        
    }
    sacar(valor){
        if (this[saldo] <= -100){
            console.log(`Você ultrapassou o limite de saques!!`);
            console.log(` `);
            
            return  
        }
        console.log(`Seu saldo: ${this[saldo]}`);
        console.log(`Você acabou de sacar: ${valor}`);
        
        this[saldo] -= valor;
        console.log(`Seu saldo é de ${this[saldo]} `);
        console.log(` `);
        
    }
};

const conta1 = new ContaBancaria(11, `Francisco`)

conta1.depositar(100);
conta1.sacar(200)
conta1.sacar(1)

