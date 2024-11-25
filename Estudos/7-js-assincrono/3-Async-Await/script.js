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


// Async - Awayt 
// Permite que usemos promisses dentro do corpo da função como se fossem sicronas, como se fosse os then()

async function executa(params) {
    try {
        const fase1 = await esperaAi(`Fase 1`, rand())
        console.log(fase1);
        const fase2 = await esperaAi(4, rand())
        console.log(fase2);
        const fase3 = await esperaAi(`Fase 3`, rand())
        console.log(fase3);
    } catch (error) {
        console.log(error);
        
    }
 
}

executa()

// esperaAi(`Fase 1`, rand())
//     .then((resposta)=>{
//         console.log(resposta);
//         return esperaAi(`Frase 2`, rand())})
//     .then((resposta)=>{
//         console.log(resposta)
//         return esperaAi(`Frase 3`, rand())})
//     .then((resposta)=>{
//         console.log(resposta)})
//     .catch((error)=>{
//         console.log( error); console.log(` `);
//         })

