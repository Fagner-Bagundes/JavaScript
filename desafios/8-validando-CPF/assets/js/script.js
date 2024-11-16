
let cpf = `064.794.352-22`
let cpfNumber;
let cpfCalculavel;
let cpfMultiplicado1;
let cpfMultiplicado2;

function TornaCpfCalculavel() {
    let cpfLimpo = cpf.replace(/\D+/g, ``)
    let cpfArray = Array.from(cpfLimpo);
    cpfNumber = cpfArray.map((valor) => parseInt(valor))
    cpfCalculavel = [...cpfNumber]
    cpfCalculavel.splice(-2, 2)
}
TornaCpfCalculavel()

// multipllicações:

function multiplicador1(mult) {

    let multCpf1 = cpfCalculavel.map((valor) => {
            let multiplicado = valor * mult
            --mult
            return multiplicado
    })
    cpfMultiplicado1 = multCpf1

}

function resultado1(cpf) {
    // soma
    let soma = cpf.reduce((acumulador, valor) => {
        return acumulador + valor
    }, 0)

    // divisão
    return 11 - (soma % 11)
}


function multiplicador2(mult) {
    cpfCalculavel.push(resultado1(cpfMultiplicado1))
    let multCpf = cpfCalculavel.map((valor) => {
            let multiplicado = valor * mult
            --mult
            return multiplicado
    })
    cpfMultiplicado2 = multCpf
}


function resultado2(cpf) {
    // soma
    let soma = cpf.reduce((acumulador, valor) => {
        return acumulador + valor
    }, 0)

    // divisão
    return 11 - (soma % 11)
}

multiplicador1(10)
multiplicador2(11)

let resultados = [resultado1(cpfMultiplicado1),resultado2(cpfMultiplicado2)]
let ultimoDigCPF = cpfNumber.splice(-2, 2)


function avisaCPF(i, invalido) {
    if(invalido === true && i> 0) return console.log(`cpf Inválido`);
    if (i > 0) return console.log(`Cpf Válido`);
}
for(let i in ultimoDigCPF){

    let final = resultados[i] === ultimoDigCPF[i] ? avisaCPF(i, false) :  avisaCPF(i, true)
  
}









    








