// function funcao(mensagem) {
//     console.log(mensagem);
    
// }

// funcao(`oiii`);


// function funcao2({a, b, c}){
//     console.log(a, b, c);
// }

// funcao2({a:1 ,b:2 ,c:3})


// function funcao3(valor1, valor2, valor3, ...resto){
//     console.log(valor1, valor2, valor3, resto);
// }

// funcao3(1,2,3,4,5,6)
let barra = ()=> console.log(`-----------------------------------------------------`);
let espaco = ()=> console.log(` `);



console.log(`Usando Arguments de funções:`);
espaco()

function funcao1(nome, sobrenome){
    console.log(nome, sobrenome);
    
    console.log(arguments);
    console.log(arguments[2]);
    
}
funcao1(`Fagner`, `Ferreira`, `Bagundes`, 19)
barra()
console.log(`Atribuição via desestruturação em parâmetros com array:`);
espaco()

function funcao2([fruta1, fruta2, fruta3]){
    console.log(fruta1, fruta2, fruta3);
    
}

funcao2([`Açai`, `maça`, `uva`])
barra()

console.log(`Atribuição via desestruturação em parâmetros com obejetos:`);
espaco()
function fucao3({fruta1, fruta2, fruta3}){
    console.log(fruta1, fruta2,fruta3);
}

fucao3({fruta1: `maça`,fruta2: `pera`,fruta3: `jaca` })
barra()
console.log(`funcções com parâmetros com valores padrões`);
espaco
function funcao4(num1=15, nume2 = 10){
    console.log(num1 + nume2);
}
funcao4();




