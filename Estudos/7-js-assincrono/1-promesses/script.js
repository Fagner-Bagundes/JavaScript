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

espereaAi(`eae meu Filho 1`, rand(1, 3))
espereaAi(`eae meu Filho 2`, rand(1, 3))
espereaAi(`eae meu Filho 3`, rand(1, 3))

