// Filter, Map, reduce
// função filter querer que retorner um boleano

// retorna os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor);
    console.log(indice);
    console.log(array);
    
    
    return valor > 10
});
console.log(numerosFiltrados);


// let numerosM10 = []
// for(let el of numeros) if (el > 10) numerosM10.push(el)
// console.log(numerosM10);

