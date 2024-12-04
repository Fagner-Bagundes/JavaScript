const nRandom = Math.ceil(Math.random() * 10)

function calcular(nRandom) {
    return new Promise((resolve, reject)=>{
        let soma = nRandom *2
        resolve(nRandom * 2)
        
    })
} 

calcular(nRandom)
.then((resolve)=>{
    console.log(resolve);
}).then((resolve)=>{
    console.log(resolve);
})


