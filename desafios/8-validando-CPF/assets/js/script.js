
let cpf = `370.974.822-49`
let cpfNumber;
let cpfMultiplicado1;
let cpfMultiplicado2;



function TornaCpfCalculavel() {
    let cpfLimpo = cpf.replace(/\D+/g, ``)
    let cpfArray = Array.from(cpfLimpo);
    cpfNumber = cpfArray.map((valor) => parseInt(valor))
    cpfNumber.splice(-2, 2)
}
TornaCpfCalculavel()

// multipllicações:

function multiplicador1(mult1) {

    // fazendo a primeira multiplicação
    let multCpf1 = cpfNumber.map((valor, indice) => {
            let multiplicado = valor * mult1
            --mult1
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
    cpfNumber.push(resultado1(cpfMultiplicado1))
    // fazendo a primeira multiplicação
    let multCpf = cpfNumber.map((valor, indice) => {
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

TornaCpfCalculavel()
const resultadoFinal = [...cpfNumber, ...resultados]
console.log(resultadoFinal);






