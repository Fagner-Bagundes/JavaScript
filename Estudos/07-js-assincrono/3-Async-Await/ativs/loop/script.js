// function processarArray(indice ,array = [1,2,3,4]) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//                 resolve(array[indice])
                
//             }, 1000)
            
//         }
//     )
// }

// async function resolverPromises() {

//     const numero = await processarArray(0)
//     console.log(numero);
//     const numer2 = await processarArray(1)
//     console.log(numer2);
//     const numer3 = await processarArray(2)
//     console.log(numer3);
//     const numer4 = await processarArray(3)
//     console.log(numer4);
// }

// resolverPromises()


async function ArrayPromise(array) {
    for(let valor of array){
        const rand = Math.ceil(Math.random() * (10 -8)) * 1000
        await esperar(rand)    
        console.log(valor);
        
    }
    
}


function esperar(sg) {
    return new Promise((resoolve)=> setTimeout(resoolve, sg))
}


ArrayPromise([1,2,3,4,5,6])