// Unsando setInterval você pode fazer intervalos de tempo, o cogido dentro do interval vai ser executado 



function mostraData() {
    let data = new Date();
    return data.toLocaleString(`pt-BR`)
    
}


setInterval(function(){
    console.log(mostraData());
}, 2000);

