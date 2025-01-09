const relogio = document.querySelector(`.relogio`)
const btnIniciar = document.querySelector(`.iniciar`)
const btnPausar = document.querySelector(`.pausar`)
const btnZerar = document.querySelector(`.zerar`)
const aviso = document.querySelector(`.aviso`)
let hrTimer;
let minTimer;
let segTimer;

let hr = 0;
let min = 0;
let seg = 0;

let hora;

// Funções que mudam estilos

let mudarEstilos = {
    positivo(){
        aviso.classList.remove(`negativo`)
        aviso.classList.add(`positivo`)
    },
    negativo(){
        aviso.classList.remove(`positivo`)
        aviso.classList.add(`negativo`)
    },
    semEstilos(){
        aviso.classList.remove(`positivo`)
        aviso.classList.remove(`negativo`)
    }
}


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
    if (numerosDeClicks > 0){
        aviso.innerHTML = `Você precisa zerar um timer, para iniciar outro`
        mudarEstilos.negativo()
        return  
    } 
    numerosDeClicks = 1;
    console.log(e);
    AdiconaSeg()
    Adicionamin()
    AdiconaHr()
    aviso.innerHTML = `timer está rodando🤠.....`
    mudarEstilos.positivo();
})

btnPausar.addEventListener(`click`, (e)=>{
paraHrs();
mudarEstilos.semEstilos()
aviso.innerHTML = `aperte Iniciar para retomar o timer😎`
})

btnZerar.addEventListener(`click`,() =>{
    seg = 0;
    min = 0;
    hr = 0;
    criaData();
    paraHrs();
    mudarEstilos.semEstilos()
    aviso.innerHTML = `Aperte inciar para começar o timer😁`

});