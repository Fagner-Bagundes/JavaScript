
// function dobrar(num) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num * 2)
//         },1500)
//     })
// }
// function somarCinco(num) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num + 5)
//         }, 500)
//     })
// }
// function mult10(num) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num * 10)
//         }, 1000)
//     })
// }

// async function resolvepromises(num) {
//     try{
//         console.log(`Numero Inicial: `, num);
        
//         const dobrado = await dobrar(num)
//         console.log(`Numero dobrado: `,dobrado);
//         const somado5 = await somarCinco(dobrado)
//         console.log(`Somando mais 5: `,somado5);
    
//         const multiplicado10 = await mult10(somado5)
//         console.log(`Multiplicando por 10: `,multiplicado10);
//     }catch(error){
//         console.log(`Error: `, error);
        
//     }

// }

// resolvepromises(2)

class Calculos{
    constructor(numP ){
        this.numP = numP;
    }

    determinaCalculo(operador, q){
        if(operador === `*`) return this.numP * q
        if(operador === `+`) return this.numP + q
    };
    calculo(operador, q){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (!operador, !q) reject(`Dados não fornecidos!!`)
                resolve(this.determinaCalculo(operador, q))
            }, 500)
        })
    }

}
async function executaPromises(num) {
    try{
        const dobro = await new Calculos(num).calculo(`*`, 2)
        console.log(dobro);
        const soma5 = await new Calculos(dobro).calculo(`+`, 5)
        console.log(soma5);
        const mult10 = await new Calculos(soma5).calculo(`*`, 10)
        console.log(mult10);    
    } catch(error){
        console.log(`Error: `, error);
        
    }
}
executaPromises(2)

