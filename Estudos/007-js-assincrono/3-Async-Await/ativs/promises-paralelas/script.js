function burcarDados1(dados) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (dados) {
                resolve(`Dados 1`)
            }else{
                reject(`Dados não encontrados`)
            }
        }, 2000)
    })
    
}

function burcarDados2(dados) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (dados) {
                resolve(`Dados 2`)
            }else{
                reject(`Dados não encontrados`)
            }
        }, 1000)
    })
    
}

function burcarDados3(dados) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (dados) {
                resolve(`Dados 3`)
            }else{
                reject(`Dados não encontrados`)
            }
        }, 3000)
    })
    
}


async function executaPromises() {
    try{
        const busca1 = await burcarDados1(`dados1`)
        console.log(`dados: `, busca1);
        const busca2 = await burcarDados2(`dados2`)
        console.log(`dados: `, busca2);
        const busca3 = await burcarDados3(`dados3`)
        console.log(`dados: `, busca3);
    }catch(error){
        console.log(`Error: `, error);
        
    }
}

executaPromises()