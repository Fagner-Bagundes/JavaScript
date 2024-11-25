function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
    
} 


function espereaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{  
            if (typeof msg !== `string`) {
                reject(`Mensagem invalida`)
            } else{
                resolve(msg)
            }
        }, tempo)

        
    });

}


espereaAi(`frase 1`, rand(1, 3))
.then((resultado)=>{
    console.log(resultado)
    return espereaAi(3434, rand(1, 3))
}).then((resultado)=>{
    console.log(resultado);
    return espereaAi(`Frase 3`, rand(1, 3))
}).then((resultado)=>{
    console.log(resultado);
})
.catch((error)=>{
    console.log(`Error:`, error);
    
})


