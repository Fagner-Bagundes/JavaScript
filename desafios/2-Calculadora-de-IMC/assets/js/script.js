
const formulario = document.querySelector(`.formulario`)
const btn = document.querySelector('.btn')
const resultadoInput = document.querySelector(`.resultado-calculo`)
let iniciarMostraResultado; 
let pesoInput;
let alturaInput;
let pesoN;
let alturaN;
let valorIMC;
let estadosR = [`Abaixo do peso`, `com o peso Normal`, `Com sobrepeso`, ` com obesidade Grau 1`, `com obesidade Grau 2`, `com obesidade Grau 3`]


formulario.addEventListener(`submit`, clickOnButton)



function verificaDados() {
    
    if (pesoN === 0 && alturaN === 0) {
        resultadoInput.innerHTML =`Digite alguma coisa nas caixas de textos`
        iniciarMostraResultado = false;
        
    } else if(pesoN === 0 || alturaN === 0){
        resultadoInput.innerHTML =`
        Faltou faltou digitar dados em um um dos camopos de textp`
    } else if (isNaN(alturaN) && isNaN(pesoN)) {
        resultadoInput.innerHTML =`Digite Numeros validos nos campos de textos`
        iniciarMostraResultado = false;
    } else if(alturaN <=1 || pesoN<=10){
        resultadoInput.innerHTML =`Digite Numeros validos nos campos de textos`
    }
    
    else {
        iniciarMostraResultado = true;
        alturaInvalida()
        pesoInvalido()
        
    }


    function pesoInvalido() {
        
        if (isNaN(pesoN)) {
            resultadoInput.innerHTML = `O valor de peso é inválido!!`;
            iniciarMostraResultado = false;
            
        } else if (pesoN >= 350) {
            resultadoInput.innerHTML =`Digite um valor menor na area de peso`;
            iniciarMostraResultado = false;
            
        }
    }
    
    
    
    
    function alturaInvalida() {
        
        if (isNaN(alturaN)) {
            resultadoInput.innerHTML = `O valor de altura é inválido!!`;
            iniciarMostraResultado = false;
            
        } else if (alturaN >= 3) {
            resultadoInput.innerHTML =`Digite um valor menor na area de altura`;
            iniciarMostraResultado = false;
            
        } else{
            iniciarMostraResultado = true
        }
    }

    

    


}

function calculaIMC() {
    let calc = pesoN / (alturaN * alturaN)
    valorIMC = calc.toFixed(1)
}

function mostraResultado(){
    calculaIMC()
    
    if (iniciarMostraResultado === true) {
        if (valorIMC > 40) {
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[5]}</p>`;
            iniciarMostraResultado = false;
        }else if (valorIMC <= 39.9 && valorIMC>= 35){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[4]}</p>`;
            iniciarMostraResultado = false;
            
        } else if(valorIMC <= 34.9 && valorIMC>= 30){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[3]}</p>`;
            iniciarMostraResultado = false;
    
        } else if(valorIMC <= 29.9 && valorIMC >= 25){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[2]}</p>`;
            
        } else if(valorIMC<= 24.9 && valorIMC >= 18.5){
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[1]}</p>`;
    
        } else {
            resultadoInput.innerHTML =`<p> Seu IMC é ${valorIMC} e você está: ${estadosR[0]}</p>`;
            iniciarMostraResultado = false;
        }
    }
}

function adicionaOuRemoveEstilos(){
    if (iniciarMostraResultado === true) {
        resultadoInput.classList.remove(`resultado-invalido`)
        resultadoInput.classList.add(`resultado-valido`)
    } else {
        resultadoInput.classList.remove(`resultado-valido`)
        resultadoInput.classList.add(`resultado-invalido`)
    };
}

function clickOnButton(event) {
    event.preventDefault()

    pesoInput = document.querySelector(`.peso-input`);
    alturaInput = document.querySelector('.altura-input');
    pesoN = Number(pesoInput.value)
    alturaN = Number(alturaInput.value);

    verificaDados()
    mostraResultado()
    adicionaOuRemoveEstilos()
    
}





