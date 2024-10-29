
    
const formulario = document.querySelector(`.formulario`)
const btn = document.querySelector('.btn')
const resultado = document.querySelector(`.resultado-calculo`)
let pesoInput;
let alturaInput;
let pesoN;
let alturaN;


function camposInvalidos() {
    if (pesoN === 0 && alturaN === 0)  {
        console.log(`Digite alguma coisa nas caixas de textos`)
    } else if( isNaN(alturaN) && isNaN(pesoN)){
        console.log(`Digite Numeros validos nos campos de textos`)
    } else{
        alturaInvalida()
        pesoInvalido()
    }


    function pesoInvalido() {

        if (isNaN(pesoN)) {
            console.log(`O valor de peso é inválido!!`);
        } else if(pesoN >= 350){
            console.log(`Digite um valor menor na area de peso`);
    
        }
    }
    
    function alturaInvalida() {
    
        if (isNaN(alturaN)) {
            console.log(`O valor da altura é inválido!!`);
        } else if(alturaN >= 3){
            console.log(`Digite um valor menor na area de altura`);
    
        }
    }
    
    
}



function clickOnButton(event) {
    event.preventDefault()

    pesoInput = document.querySelector(`.peso-input`);
    alturaInput = document.querySelector('.altura-input');
    pesoN = Number(pesoInput.value)
    alturaN = Number(alturaInput.value)

    ;
    camposInvalidos()

    
}


formulario.addEventListener(`submit`, clickOnButton)


