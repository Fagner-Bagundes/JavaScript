(function(idade, peso, altura){
    const sobrenome = `miranda`
    function criaNome(nome){
        return nome + ` ` + sobrenome;
    }


    function falaNome(){
        console.log(criaNome(`Luiz`));
    };

    falaNome();
    console.log(idade, peso, altura);

})(30, 56, 1.65);

// Funções imediatas(IIFE) é uma forma de chamar uma funcção no exato momento em que ela é criada, é muito usada para não poluir  o escopo global e não geran erro com uma biblioteca externa