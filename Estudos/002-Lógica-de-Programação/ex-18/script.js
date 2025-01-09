function mostraHora(){
    let data = new Date();
    
    return data.toLocaleTimeString(`pt-BR`)
}


setTimeout(() =>{
    console.log(`Hello World`)
}, 1000)


const timer = setInterval(function(){
    console.log(mostraHora());
    
}, 2000);

setTimeout(() => {
   clearInterval(timer)
}, 5000);
