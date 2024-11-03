const relogio = document.querySelector(`.relogio`)
const btnIniciar = document.querySelector(`.iniciar`);
const btnPausar = document.querySelector(`.pausar`);
const btnZerar = document.querySelector(`.zerar`);;
// let hora = new Date().toLocaleTimeString(`pt-BR`)
let seg = 0;
let min = 0;
let hora = 0;


function adicionaSegundos(){
    let segundos = setInterval(()=>{
        if (seg<=5){
            console.log(seg);
            ++seg
        } else {
            seg = 0
           
        }
        
    }, 1000)
   
}



btnIniciar.addEventListener(`click`, (event)=>{
    console.log(`Botão iniciar clicaco`)
    adicionaSegundos();
})

btnPausar.addEventListener(`click`, (event)=>{
    console.log(`Botão pausar clicado`)
})

btnZerar.addEventListener(`click`, (event)=>{
    console.log(`Botão zerar clicado`)
    clearInterval(segundos);

})