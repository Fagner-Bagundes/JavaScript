function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return parseInt((Math.random() * (max - min) - min))
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (typeof msg !== "string"){
                reject(`CAÍ NO ERRO`)  
                return;
            } 

            resolve(msg.toUpperCase() + ` - Passei na promise`)
        }, tempo)

    });
};

esperaAi(`Fase 1`, rand())
    .then((resposta)=>{
        console.log(resposta);
        return esperaAi(`Frase 2`, rand())})
    .then((resposta)=>{
        console.log(resposta)
        return esperaAi(`Frase 3`, rand())})
    .then((resposta)=>{
        console.log(resposta)})
    .catch((error)=>{
        console.log( error);})