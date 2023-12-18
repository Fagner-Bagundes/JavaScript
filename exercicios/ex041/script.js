// função consstrutora -> objetos
//  função fabrica -> objetos
//  contrutora -> Pessoa (new) 

    function Pessoa(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodo = function() {
            console.log(this.nome + ` Está falando oi`);
        };
    } 

    const p1 = new Pessoa(`Fagner`, `Ferreira`);
    p1.metodo();