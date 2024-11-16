
let cpf = `064-794-352-22`
let cpfLimpo = cpf.replace(/\D+/g, ``)
let cpfArray = Array.from(cpfLimpo);

// Convertendo o cpf em number
let cpfNumber = cpfArray.map((valor) => {
    return parseInt(valor)
})

// Funcão

function multiplicador(params) {

    // fazendo a primeira multiplicação
    let mult1 = 10;
    let multiplicaCpf1 = cpfNumber.map((valor, indice) => {
        if (indice <= cpfNumber.length - 3) {
            let multiplicado = valor * mult1
            --mult1
            return multiplicado
        }
    })
    let resultado = multiplicaCpf1.slice(0, -2)
}


let restult1 = mult1.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0)











console.log(mult1);
console.log(restult1);






// console.log(geraNum1);

// console.log(cpfArray.reduce((ac, val) =>{
//     ac + Number(val)
// }, 0))
