function barra() {
    console.log(`______________________________________`);
}
function espaco() {
    console.log(` `);
    
    
}

let num1 = 15.6
console.log(`Arredondando para baixo o valor ${num1} da variável num1`);
console.log(Math.floor(num1))
barra()
console.log(`Arredondando para cima o valor ${num1} da variavel num1`);
console.log(Math.ceil(num1));
barra()
console.log(`Arredondando o valor ${num1} para o valor mais próximo`);
console.log(Math.round(num1))
barra()
console.log(`Descobrindo o menor valor de`, 10, 20., 5.5, 9004)
console.log(`o menor numero é: `,Math.min(10, 20, 5.5, 9004))
barra()
console.log(`Descobrindop o menor valor de`, 10, 20., 5.5, 9004)
console.log(`o maior numero é: `,Math.max(10, 20, 5.5, 9004))
barra()
console.log(`Gerando  um numero aleatórios com o metodo random():`)
console.log(Math.random());
espaco()
console.log(`Gerando um numero aleatório e inteiro de 0 a 10:`)
console.log(Math.random() * (10))

espaco()

console.log(`Gerando um numero aleatório de 10 a 20`);
console.log(Math.random() * (10) + 10)







