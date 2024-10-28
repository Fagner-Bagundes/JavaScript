function meuEscopo(){
// Seclecionando os formulários
const form = document.querySelector(`.formulario`);

// form.onsubmit = function (evento) {
//     evento.preventDefault();
//     console.log(`oii`);
    
// };

let contador = 0;
function inpedeAt(event){
    event.preventDefault()
    contador++
    console.log(contador)
}

form.addEventListener(`submit`, inpedeAt)

const nome = document.querySelector(`.nome`);
const sobrenome = document.querySelector(`.sobrenome`);
const peos = document.querySelector(`.peso`);
const altura = document.querySelector(`.altura`);


}

meuEscopo();