function Pessoa(nome, sobrenome){
    const ID = 1234; //variável privada
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = ()=>{
        console.log(this.nome + ` está falando oi`);
    }

}


const p1 = new Pessoa(`Fagner`, `Ferreira`);


p1.metodo();

