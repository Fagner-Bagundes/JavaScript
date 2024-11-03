function mostraHora(){
    let data = new Date();
    
    return data.toLocaleTimeString(`pt-BR`)
}


const timer = setInterval(function(){
    console.log(mostraHora());
    
}, 1000);

setTimeout(() => {
   clearInterval(timer)
}, 10000);
