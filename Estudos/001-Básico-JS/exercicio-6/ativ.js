let varA = `A`
let varB = `B`
let varC = `C`

let varAReserva = varA

varA = varB
varB = varC
varC = varAReserva


console.log(varA, varB, varC)
