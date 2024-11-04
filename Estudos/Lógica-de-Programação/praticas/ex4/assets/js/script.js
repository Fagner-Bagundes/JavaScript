const relogio = document.querySelector(`.relogio`)
const btnIniciar = document.querySelector(`.iniciar`)
const btnPausar = document.querySelector(`.pausar`)
const btnZerar = document.querySelector(`.zerar`)
let hrTimer;
let minTimer;
let segTimer;

let hr = 0;
let min = 0;
let seg = 0;

let hora;

// Funções que manipulam os horários
function criaData(){
    hora = new Date(`1-1-2005 ${hr}:${min}:${seg}`).toLocaleTimeString(`pt-BR`)
    relogio.innerHTML = hora;
}

function AdiconaHr() {
    hrTimer = setInterval(()=>{
        hr++
        criaData()
        if (hr === 60 ) hr = 0;
        
    },360000)
};

function Adicionamin(){
    minTimer = setInterval(()=>{
            min++
            criaData()
            if (min === 60 ) min = 0;
        
        
    },60000)
};

function AdiconaSeg() {
    
    segTimer = setInterval(()=>{
        seg++
        criaData()
        if (seg === 60 ) seg = 0;
        console.log(seg);
        
        
        
    },1000)
};

function paraHrs(){
    clearInterval(hrTimer)
    clearInterval(minTimer)
    clearInterval(segTimer)
    numerosDeClicks = 0;

}

let numerosDeClicks = 0;

// Pegando eventos de click

btnIniciar.addEventListener(`click`,(e)=>{
    if (numerosDeClicks > 0) return
    numerosDeClicks = 1;
    console.log(e);
    AdiconaSeg()
    Adicionamin()
    AdiconaHr()
})

btnPausar.addEventListener(`click`, (e)=>{
paraHrs();
})

btnZerar.addEventListener(`click`,() =>{
    seg = 0;
    min = 0;
    hr = 0;
    criaData();
    paraHrs();

})