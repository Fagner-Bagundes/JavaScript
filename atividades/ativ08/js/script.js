function escopo() {

const formulario = document.querySelector(`.formulario`)
const resposta = document.querySelector(`.resposta`)

function recebeEvento(evento){

    const dados = [];
    
    evento.preventDefault();
    const peso = formulario.querySelector(`#idpeso`);
    const altura = formulario.querySelector(`#idaltura`);

    dados.push( {
        peso: peso.value,
        altura: altura.value
    })

    console.log(dados);

    resposta.innerHTML += `fdjslçfjlsdfjljflkj`
}

addEventListener(`submit`, recebeEvento)

};



escopo();