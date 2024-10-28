function meuEscopo(){
// Seclecionando os formulários
const form = document.querySelector(`.formulario`);

// form.onsubmit = function (evento) {
//     evento.preventDefault();
//     console.log(`oii`);
    
// };

let contador = 0;
form.addEventListener(`submit`, (event) =>{
    event.preventDefault()
    contador++
    console.log(`O formulário não foi envido: ${contador}`)
})

const nome = document.querySelector(`.nome`);
const sobrenome = document.querySelector(`.sobrenome`);
const peos = document.querySelector(`.peso`);
const altura = document.querySelector(`.altura`);


}

meuEscopo();