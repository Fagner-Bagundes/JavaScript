// Capturar evento de submit do formulario

const formulario = document.querySelector(`.formulario`)



formulario.addEventListener(`submit`, function (event) {
    event.preventDefault();
    
    const inputPeso = event.target.querySelector(`#peso`)
    const inputAltura = event.target.querySelector(`#altura`)

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado(`Peso inválido`, false)
        return;

        
    }

    if (!altura) {
        setResultado(`Altura inválida`, false)
        return;

        
    }

    const imc = getIMC(peso, altura)
    const nivelIMC = getNivelImc(imc);

    console.log(imc, nivelIMC);
});

/*
Menos do que 18,5 ->
Entre 18,5 e 24,9 ->
Entre 25 e 29,9 ->
Entre 30 e 34,9 ->
entre 35 e 39,9 ->
Mais do que 40 ->

*/

function getNivelImc(imc) {
    const nivel = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade`, `Obesidade severa`, `Obesidade morbida`];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    else return nivel[0];
    
    
}

function getIMC (peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
    
}

function criaP() {
    const p = document.createElement(`p`);
    return p;
    
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector(`.resultado`)
    resultado.innerHTML = ``;
   
   const p = criaP();
   p.innerHTML = msg;
   resultado.appendChild(p);
}