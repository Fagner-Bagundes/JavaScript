function meuEscopo() {
    // Seclecionando os formulários
    const form = document.querySelector(`.formulario`);
    const resultado = document.querySelector(`.resultado`);
    const lista = [];


    function recebeFormulario(event) {
        event.preventDefault();

        const nome = form.querySelector(`.nome`);
        const sobrenome = form.querySelector(`.sobrenome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);
        
        function criaObjeto(nome, sobrenome, peso, altura){
            return {
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            }

        }
        lista.push(criaObjeto(nome.value, sobrenome.value, peso.value, altura.value))

        console.log(lista)
        
    };

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     console.log(`oii`);

    // };

    form.addEventListener(`submit`, recebeFormulario);

};

meuEscopo();