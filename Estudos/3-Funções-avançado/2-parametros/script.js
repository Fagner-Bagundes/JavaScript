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


function funcao1(nome, sobrenome){
    console.log(nome, sobrenome);
    
    console.log(arguments);
    console.log(arguments[2]);
    
}

funcao1(`Fagner`, `Ferreira`, `Bagundes`, 19)