

const formulario = document.querySelector(`.formulario`)
const btn = document.querySelector('.btn')
const resultadoInput = document.querySelector(`.resultado-calculo`)
let pesoInput;
let alturaInput;
let pesoN;
let alturaN;
let valorIMC;
let estadosR = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade Grau 1`, `Obedidade Grau 2`, `Obesidade Grau 3`]


function mostraResultado(){
    if (valorIMC > 40) {
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[5]}`)

    }else if (valorIMC <= 39.9 && valorIMC>= 35){
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[4]}`)

    } else if(valorIMC <= 34.9 && valorIMC>= 30){
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[3]}`)

    } else if(valorIMC <= 29.9 && valorIMC >= 25){
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[2]}`)

    } else if(valorIMC<= 24.9 && valorIMC >= 18.5){
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[1]}`)

    } else {
        console.log(`Seu IMC é ${valorIMC} e você está: ${estadosR[0]}`)
    }
}





formulario.addEventListener(`submit`, clickOnButton)

function verificaDados() {
    if (pesoN === 0 && alturaN === 0) {
        console.log(`Digite alguma coisa nas caixas de textos`)
    } else if (isNaN(alturaN) && isNaN(pesoN)) {
        console.log(`Digite Numeros validos nos campos de textos`)
    } else {
        alturaInvalida()
        pesoInvalido()
        calculaIMC()
    }


    function pesoInvalido() {

        if (isNaN(pesoN)) {
            console.log(`O valor de peso é inválido!!`);
        } else if (pesoN >= 350) {
            console.log(`Digite um valor menor na area de peso`);

        }
    }

    function alturaInvalida() {

        if (isNaN(alturaN)) {
            console.log(`O valor da altura é inválido!!`);
        } else if (alturaN >= 3) {
            console.log(`Digite um valor menor na area de altura`);

        }
    }


}

function calculaIMC() {
    let calc = pesoN / (alturaN * alturaN)
    valorIMC = calc.toFixed(1)
    console.log(valorIMC)
}


function clickOnButton(event) {
    event.preventDefault()

    pesoInput = document.querySelector(`.peso-input`);
    alturaInput = document.querySelector('.altura-input');
    pesoN = Number(pesoInput.value)
    alturaN = Number(alturaInput.value)

        ;
    verificaDados()
    mostraResultado()


}




