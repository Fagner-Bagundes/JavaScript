
let cpf = `705-484.450-52`
let cpfLimpo = cpf.replace(/\D+/g, ``)
let cpfArray = Array.from(cpfLimpo);
console.log(cpfArray);


let cpfConvertido = cpfArray.map((valor)=>{
    return parseInt(valor)
})
console.log(cpfConvertido);

// console.log(cpfArray.reduce((ac, val) =>{
//     ac + Number(val)
// }, 0))
