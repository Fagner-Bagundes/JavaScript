function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
    
} 


function espereaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{  
            resolve(msg)
        }, tempo)

        
    });

}


espereaAi(`frase 1`, rand(1, 3))
.then((resultado)=>{
    console.log(resultado)
    return espereaAi(`frase 2`, rand(1, 3))
}).then((resultado)=>{
    console.log(resultado);
    return espereaAi(`Frase 3`, rand(1, 3))
}).then((resultado)=>{
    console.log(resultado);
    
})


