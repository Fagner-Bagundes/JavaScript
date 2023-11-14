function escopo(){
const formulario = document.querySelector(`.formulario`);
const resultado = document.querySelector(`.resultado`)

function recebeEnventoForm(evento) {

    const pessoas = [ ];

    evento.preventDefault();

    const nome = document.querySelector(`.nome`)
    const sobrenome = document.querySelector(`.sobrenome`)
    const altura = document.querySelector(`.altura`)
    const peso = document.querySelector(`.peso`);

    pessoas.push({
        nome: nome.value,
        sobrenome :sobrenome.value,
        altura: altura.value,
        peso: peso.value
    });

    console.log(pessoas);

    resultado.innerHTML += `nome: ${nome.value} </ br>
     sobrenome: ${sobrenome.value} </ br> 
     alura: ${altura.value} </ br>
      peso: ${peso.value} </ br>`;

}

formulario.addEventListener(`submit`, recebeEnventoForm);
};


escopo()