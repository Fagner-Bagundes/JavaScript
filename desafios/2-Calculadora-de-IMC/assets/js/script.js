

const formulario = document.querySelector(`.formulario`)
const btn = document.querySelector('.btn')
const resultadoInput = document.querySelector(`.resultado-calculo`)
let iniciarMostraResultado = true; 
let pesoInput;
let alturaInput;
let pesoN;
let alturaN;
let valorIMC;
let estadosR = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade Grau 1`, `Obedidade Grau 2`, `Obesidade Grau 3`]


function mostraResultado(){
    if (iniciarMostraResultado === true) {
        if (valorIMC > 40) {
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[5]}</p>`;
        }else if (valorIMC <= 39.9 && valorIMC>= 35){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[4]}</p>`;
    
        } else if(valorIMC <= 34.9 && valorIMC>= 30){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[3]}</p>`;
    
        } else if(valorIMC <= 29.9 && valorIMC >= 25){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[2]}</p>`;
    
        } else if(valorIMC<= 24.9 && valorIMC >= 18.5){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[1]}</p>`;
    
        } else {
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[0]}</p>`;
        }
    }
}


formulario.addEventListener(`submit`, clickOnButton)

function verificaDados() {

    if (pesoN === 0 && alturaN === 0) {
        resultadoInput.innerHTML =`Digite alguma coisa nas caixas de textos`
        iniciarMostraResultado = false;
    } else if (isNaN(alturaN) && isNaN(pesoN)) {
        resultadoInput.innerHTML =`Digite Numeros validos nos campos de textos`
        
        resultadoInput.classList.add(`.resultado-invalido`)
        iniciarMostraResultado = false;
    } else {
        alturaInvalida()
        pesoInvalido()
        
    }


    function pesoInvalido() {

        if (isNaN(pesoN)) {
            resultadoInput.innerHTML =`O valor de peso é inválido!!`;
            iniciarMostraResultado = false;
        } else if (pesoN >= 350) {
            resultadoInput.innerHTML =`Digite um valor menor na area de peso`;
            iniciarMostraResultado = false;

        }
    }

    function alturaInvalida() {

        if (isNaN(alturaN)) {
            resultadoInput.innerHTML =`O valor da altura é inválido!!`;
            iniciarMostraResultado = false;
        } else if (alturaN >= 3) {
            resultadoInput.innerHTML =`Digite um valor menor na area de altura`;
            iniciarMostraResultado = false;

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
    alturaN = Number(alturaInput.value);

    verificaDados()
    calculaIMC()
    mostraResultado()
    
}




