function meuEscopo() {
    
const formulario = document.querySelector(`.formulario`)
const btn = document.querySelector('.btn')
const resultado = document.querySelector(`.resultado-calculo`)
let peso;
let altura;


function valoresInvalidos() {


    if (peso.value === "" && altura.value === ""){
        console.log(`Coloque Algum valor`)

    } else if(typeof (peso.value) === NaN|| peso.value >= 350){
        console.log(`O valor de peso é inválido!!`);
    }
}



function clickOnButton(event) {
    event.preventDefault()

    peso = document.querySelector(`.peso-input`);
    altura = document.querySelector('.altura-input');
    peso.value = Number(peso.value)
    altura.value = Number(altura.value)
    console.log(typeof peso.value)
    valoresInvalidos()

    
}

formulario.addEventListener(`submit`, clickOnButton)













































}
meuEscopo();