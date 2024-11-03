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


let contadorDeClicks = 0;

btnIniciar.addEventListener(`click`, (event) => {
    contadorDeClicks = ++contadorDeClicks
    if (contadorDeClicks < 2){
        divAviso.innerHTML = `O timer está rodando...`
        adicionaSegundos();
        adicionaMinutos();
        adicionaHoras()
    } else {
        divAviso.innerHTML = `para iniciar um novo timer, voce tem que zerar o antigo!!`
        divAviso.classList.remove(`aviso`)
        divAviso.classList.add(`avisoError`)
    }

})

btnPausar.addEventListener(`click`, (event) => {
    console.log(`Botão pausar clicado`)
    contadorDeClicks = 0;
    clearInterval(segContador);
    clearInterval(minContador);
    clearInterval(hrContador);
    divAviso.innerHTML = `O timer está está Pausado🥱`
})

btnZerar.addEventListener(`click`, (event) => {
    console.log(`Botão zerar clicado`)
    contadorDeClicks = 0;
    clearInterval(segContador);
    clearInterval(minContador);
    clearInterval(hrContador);
    seg = 0
    min = 0
    seg = 0
    atualizaHoario()
    divAviso.innerHTML = `Aperte inciar para começar o timer😁`;
    divAviso.classList.remove(`avisoError`)
    divAviso.classList.add(`aviso`)
    
})