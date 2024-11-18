
let cpf = `064.794.352-22`
let cpfNumber;
let cpfCalculavel;
const multiplicado = []
TornaCpfCalculavel()
let ultimoDigCPF = cpfNumber.splice(-2, 2)

if (cpfNumber.length > 11) throw new Error("Seu CPF não é válido");

function TornaCpfCalculavel() {
    let cpfLimpo = cpf.replace(/\D+/g, ``)
    let cpfArray = Array.from(cpfLimpo);
    cpfNumber = cpfArray.map((valor) => parseInt(valor))
    cpfCalculavel = [...cpfNumber]
    cpfCalculavel.splice(-2, 2)
}

function multiplicador(mult, i){
    let multCpf1 = cpfCalculavel.map((valor) => {
        let multiplicado = valor * mult
        --mult
        return multiplicado
})

multiplicado[i] = multCpf1

}

multiplicador(10, 0)

function resultado(cpf) {
    // soma
    let soma = cpf.reduce((acumulador, valor) => {
        return acumulador + valor
    }, 0)

    // divisão
    let resultado =  11 - (soma % 11)
    return resultado
}

cpfCalculavel.push(resultado(multiplicado[0]))
multiplicador(11, 1)

let resultados = [resultado(multiplicado[0]), resultado(multiplicado[1])]

function avisaCPF(i, invalido) {
    if(invalido === true && i> 0) return console.log(`cpf Inválido`);
    if (i > 0) return console.log(`Cpf Válido`);
}

for(let i in ultimoDigCPF) resultados[i] === ultimoDigCPF[i] ? avisaCPF(i, false) :  avisaCPF(i, true)
    










    








