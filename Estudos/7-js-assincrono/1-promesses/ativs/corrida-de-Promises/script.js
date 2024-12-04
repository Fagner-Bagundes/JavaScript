
function calcular() {
    return new Promise((resolve, reject)=>{
        const nRandom = Math.ceil(Math.random() * 10)
       resolve(nRandom)
        
    })
} 

calcular()
.then((resolve)=>{
    console.log(`numero inicial: `, resolve);
    return resolve * 2
}).then((resolve)=>{
    console.log(`numero X 2 `, resolve);
    return resolve + 5
}).then((resolve)=>{console.log(`resultado final: `, resolve);
})


