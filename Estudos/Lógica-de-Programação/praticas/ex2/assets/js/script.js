const modo1Input= document.querySelector(`.modo1`)



function criaData(){
    const data = new Date();
    let dataFormatada =data.toLocaleString(`pt-BR`, {
        dateStyle: `full`,
        timeStyle: `medium`
    })
    modo1Input.innerHTML = dataFormatada;
}

setInterval(()=>{
    criaData()
    console.log(`oi`);
    
    
}, 1000);



