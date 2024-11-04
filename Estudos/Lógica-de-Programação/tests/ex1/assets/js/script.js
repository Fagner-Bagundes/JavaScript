const formulario = document.querySelector(`.formulario`);
const pesoInput = document.querySelector(`.peso-input`);
const alturaInput = document.querySelector(`.altura-input`);
let peso;
let altura;



function filtraDados(){
    if (!peso || !altura) {
        console.log(`error`);
        
    }
}




formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    peso = Number(pesoInput.value);
    altura = Number(alturaInput.value);
    console.log(peso)
    filtraDados();
});

