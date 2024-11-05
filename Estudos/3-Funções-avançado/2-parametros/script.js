function funcao(mensagem) {
    console.log(mensagem);
    
}

funcao(`oiii`);


function funcao2({a, b, c}){
    console.log(a, b, c);
}

funcao2({a:1 ,b:2 ,c:3})


function funcao3(valor1, valor2, valor3, ...resto){
    console.log(valor1, valor2, valor3, resto);
}

funcao3(1,2,3,4,5,6)