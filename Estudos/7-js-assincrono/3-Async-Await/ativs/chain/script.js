function dobrar(num) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num * 2)
        },1500)
    })
}
function somarCinco(num) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num + 5)
        }, 500)
    })
}
function mult10(num) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num * 10)
        }, 1000)
    })
}

async function resolvepromises(num) {
    try{
        console.log(`Numero Inicial: `, num);
        
        const dobrado = await dobrar(num)
        console.log(`Numero dobrado: `,dobrado);
        const somado5 = await somarCinco(dobrado)
        console.log(`Somando mais 5: `,somado5);
    
        const multiplicado10 = await mult10(somado5)
        console.log(`Multiplicando por 10: `,multiplicado10);
    }catch(error){
        console.log(`Error: `, error);
        
    }

}

resolvepromises(2)