const relogio = document.querySelector(`.relogio`)
const btnIniciar = document.querySelector(`.iniciar`);
const btnPausar = document.querySelector(`.pausar`);
const btnZerar = document.querySelector(`.zerar`);;
const divAviso = document.querySelector(`.aviso`)

let hrContador;
let minContador;
let segContador;

let hr = 0;
let min = 0;
let seg = 0;





function adicionaHoras() {
    hrContador = setInterval(() => {
        ++hr
        atualizaHoario();
        if (hr === 60) hr = 0
    }, 3600000)
};

function adicionaMinutos() {
    minContador = setInterval(() => {
        ++min
        atualizaHoario();
        if (min === 60) min = 0
    }, 60000)
};

function adicionaSegundos() {
    segContador = setInterval(() => {
        ++seg
        atualizaHoario();
        if (seg === 60) seg = 0
    }, 1000)
};


function atualizaHoario() {
    relogio.innerHTML = new Date(`10/10/2005 ${hr}:${min}:${seg}`).toLocaleTimeString(`pt-BR`);
}

const atualizaEstilos = {

    positivo(){
        divAviso.classList.remove(`avisoError`)
        divAviso.classList.add(`aviso`)
    },

    negativo(){
        divAviso.classList.remove(`aviso`)
        divAviso.classList.add(`avisoError`)
    }
}




let contadorDeClicks = 0;

btnIniciar.addEventListener(`click`, (event) => {
    contadorDeClicks = ++contadorDeClicks
    if (contadorDeClicks < 2){
        adicionaSegundos();
        adicionaMinutos();
        adicionaHoras()
        divAviso.innerHTML = `O timer está rodando...`
        atualizaEstilos.positivo();
    } else {
        divAviso.innerHTML = `para iniciar um novo timer, voce tem que zerar o antigo!!`
        atualizaEstilos.negativo()
    }

})

btnPausar.addEventListener(`click`, (event) => {
    contadorDeClicks = 0;
    clearInterval(segContador);
    clearInterval(minContador);
    clearInterval(hrContador);
    divAviso.innerHTML = `O timer está está Pausado🥱`
    atualizaEstilos.positivo()
})

btnZerar.addEventListener(`click`, (event) => {
    contadorDeClicks = 0;
    clearInterval(segContador);
    clearInterval(minContador);
    clearInterval(hrContador);
    seg = 0
    min = 0
    seg = 0
    atualizaHoario()
    divAviso.innerHTML = `Aperte inciar para começar o timer😁`;
    atualizaEstilos.positivo()
    
})