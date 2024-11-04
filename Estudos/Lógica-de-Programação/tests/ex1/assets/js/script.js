const formulario = document.querySelector(`.formulario`);
const pesoInput = document.querySelector(`.peso-input`);
const alturaInput = document.querySelector(`.altura-input`);
const resutadoCalculo = document.querySelector(`.resultado-calculo`)
let peso;
let altura;
let IMC;

function mostraErros(error) {
    resutadoCalculo.innerHTML = error
}

function mostraIMC(estadoFisico) {
    resutadoCalculo.innerHTML = `Seu IMC é: ${IMC} e o seu estado é: ${estadoFisico} `
}

function calculaIMC(params) {
    IMC = peso / (altura * altura);
    IMC = IMC.toFixed(2);


    if (IMC > 40) mostraIMC(`Obesidade Grau 3`);
    if (IMC > 35 && IMC < 39.9) mostraIMC(`Obesidade Grau 2`);
    if (IMC > 30 && IMC < 34.9) mostraIMC(`Obesidade Grau 1`);
    if (IMC > 25 && IMC < 29.9) mostraIMC(`Sobrepeso`);
    if (IMC > 18.5 && IMC < 24.9) mostraIMC(`Peso Normal`);
    if (IMC < 18.5) mostraIMC(`Abaixo do peso`);

}

function filtraDados() {
    if (peso === 0 && altura === 0) {
        mostraErros(`Digite Valores Válidos`);
    } else if (isNaN(peso) && isNaN(altura)) {
        mostraErros(`Digite Valores Válidos`)
        return
    } else if (isNaN(peso) || peso > 350 || peso<=5) {
        mostraErros(`O valor do peso é invalido`);
    } else if (isNaN(altura) || altura>3 || altura<0.50) {
        mostraErros(`O valor da altura é invalido`)
    } else if(contadorClick === 0){
        carrega();
    }
};

formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    peso = Number(pesoInput.value);
    altura = Number(alturaInput.value);
    console.log(peso, altura)
    filtraDados();




});


let contadorClick = 0;
function carrega() {
    let adicionaPonto = `fazendo calculo`
    let timer;



    timer = setInterval(() => {
        contadorClick = 1;
        console.log(contadorClick);

        resutadoCalculo.innerHTML = adicionaPonto
        adicionaPonto += `.`

    }, 300)

    setTimeout(() => {
        clearInterval(timer)
        calculaIMC()
        contadorClick = 0;
    }, 2000);

}


