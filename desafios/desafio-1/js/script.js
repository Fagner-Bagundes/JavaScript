function meuEscopo() {
    // Seclecionando os formulários
    const form = document.querySelector(`.formulario`);
    const resultado = document.querySelector(`.resultado`);
    const lista = [];
    let contador = 0;
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
        contador++
        resultado.innerHTML += `<p>PESSOA ${contador}: <br> <strong>Nome: </strong>${nome.value}, <strong>Sobrenome</strong>: ${sobrenome.value}, <strong>Peso: </strong>${peso.value}, <strong>Altura: </strong>${altura.value} </p>`;
       
        console.log(lista)
        
    };

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     console.log(`oii`);

    // };

    form.addEventListener(`submit`, recebeFormulario);

};

meuEscopo();