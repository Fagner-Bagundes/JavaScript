const relogio = document.querySelector(`.relogio`)
const btnIniciar = document.querySelector(`.iniciar`);
const btnPausar = document.querySelector(`.pausar`);
const btnZerar = document.querySelector(`.zerar`);;

let hr = 0;
let min = 0;
let seg = 0;

let horario;


function atualizaHoario(){
    horario = new Date(`10/10/2005 ${hr}:${min}:${seg}`).toLocaleTimeString(`pt-BR`);
    relogio.innerHTML = horario
}

function adicionaSegundos() {
    
    let segundos = setInterval(() => {
            console.log(seg);
            ++seg
            atualizaHoario();
            if(seg === 60) seg = 0 

        
    }, 1000)
};



function adicionaMinutos() {
    
    let minutos = setInterval(() => {
            console.log(min);
            ++min
            atualizaHoario();
            if(min === 60) min = 0 

        
    }, 10000)
};


function adicionaHoras() {
    
    let horas = setInterval(() => {
            console.log(hr);
            ++hr
            atualizaHoario();
            if(hr === 60) hr = 0 

        
    }, 100000)
};








btnIniciar.addEventListener(`click`, (event) => {
    console.log(`Botão iniciar clicaco`)
    adicionaSegundos();
    adicionaMinutos();
    adicionaHoras()

    
    

})

btnPausar.addEventListener(`click`, (event) => {
    console.log(`Botão pausar clicado`)
})

btnZerar.addEventListener(`click`, (event) => {
    console.log(`Botão zerar clicado`)
    horario = new Date(`00:00:00`).toLocaleTimeString(`pt-BR`)

})