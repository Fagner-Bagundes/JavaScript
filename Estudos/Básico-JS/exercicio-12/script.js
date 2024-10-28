function saudacao() {
    console.log(`olá mundo`)
};

saudacao()

function saudacao2(){
    return `Olá meu Mundo`
}

let saudacaoV = saudacao2()
console.log(saudacaoV)

function saudacao3(nome){
    console.log( `Olá meu amigo ${nome}`)
}
saudacao3(`Fagner`)


function soma(x, y){
    const resultado = ((x * 100) + (y * 100)) / 100
    return resultado
}
const resultado = soma(1, 1)

console.log(resultado)

let raiz = (n) => {
    return n ** 0.5;
}

console.log(raiz(9));

let raiz2 = n => n** 0.5;
console.log(raiz(9));

