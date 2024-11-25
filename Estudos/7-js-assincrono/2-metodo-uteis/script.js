function rand(min, max) {
    min *= 1000
    max *= 1000
    return parseInt((Math.random() * (max - min) - min))
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if (typeof msg !== "string") reject(false)
        setTimeout(()=>{
            resolve(msg)
        }, tempo)

    });
};

// Promese.all Promese.rave Promese.resolve Promese.reject


// Promese.all:
//     Ele sempre recebe com array com promeses ou valores já resolvidos, ele estraga apenas uma promesa
//     com os valores dentro de um array

const promises = [
    `Primeiro valor`,
    esperaAi(`promese 1`, 3000),
    esperaAi(`promese 2`, 500),
    esperaAi(`promese 3`, 1000),
    `outro valor`
];

Promise.all(promises).then(function(valor) {
    console.log(valor);
}).catch((err)=>{
    console.log(`Error:`, err);
})

//
