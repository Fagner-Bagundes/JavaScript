const formulario = document.querySelector(`.formulario`);
const pesoInput = document.querySelector(`.peso-input`);
const alturaInput = document.querySelector(`.altura-input`);
const resutadoCalculo = document.querySelector(`.resultado-calculo`)
let peso;
let altura;

function mostraErros(error){
    resutadoCalculo.innerHTML = error
}

function filtraDados(){
    if (peso === 0 && altura === 0){
        mostraErros(`Digite Valores Válidos`);  
    } 
    if (isNaN(peso) && isNaN(altura)){
    mostraErros(`Digite Valores Válidos`)
    return
    } 
    
    if (isNaN(peso)) mostraErros(`O valor do peso é invalido`);
    if (isNaN(altura)) mostraErros(`O valor da altura é invalido`)

     
};




formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    peso = Number(pesoInput.value);
    altura = Number(alturaInput.value);
    console.log(peso, altura)
    filtraDados();
});

