function rand(min, max) {
    min *= 1000
    max *= 1000
    return parseInt((Math.random() * (max - min) - min))
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if (typeof msg !== "string") reject(`msg invalida`)
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
    esperaAi(`promese 1`, rand(1,3)),
    esperaAi(`promese 2`, rand(1,3)),
    esperaAi(32, rand(1,3)) 
];

Promise.all(promises).then(function(valor) {
    console.log(valor);
}).catch((err)=>{
    console.log(`Error:`, err);
})

// Promise.rave:
// semelhante ao Promise.all, Porem ele retorna apenas um valor, e esse valor é 
// primeira promise que foi resolvida
Promise.race(promises).then((resultado)=>{
    console.log(resultado);
}).catch((err)=>{
    console.log(`Error: `, err);
    
})

console.log(` `);