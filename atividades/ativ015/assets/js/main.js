function escopo() {
    const relogio = document.querySelector(`.relogio`)
const iniciar = document.querySelector(`.iniciar`)
const pausar = document.querySelector(`.pausar`)
const zerar = document.querySelector(`.zerar`)


iniciar.addEventListener(`click`, function(event){
    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    const timer = setInterval(function(){
     segundos++
     if (segundos>=59){
        minutos++
        segundos = 0;
     }
     if(minutos>=59){
        horas++
        minutos = 0;
     }
        const data = new Date(`2023-12-1 ${horas}:${minutos}:${segundos}`);


        relogio.innerHTML = data.toLocaleTimeString(`pt-BR`);
    }, 1000)



});

pausar.addEventListener(`click`, function(event){
});


zerar.addEventListener(`click`, function(event){
});



}

escopo();