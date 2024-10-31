for(let i = 0; i <=5; i++) {
    console.log(i,` Hello Wolrd`);
}

console.log(` `);


// percorrendo uma Array com for
const lista = [`açai`, `mostadela`,`Feijão`, `calabresa`, `toscana`];
console.log(`Lista de compras`)

for(let i=0; i<lista.length; i++){
    console.log(i,`-`,lista[i])
};

console.log(` `)
// Dizendo se um numero é impar ou par com for
console.log(`Dizendo se cada numero de 1 a 10 é impar ou par com for
`)

for(let i=1; i<=10; i++){
    const imparOuPar = i % 2 === 0 ? `par` : `impar`; 
    console.log(`O numero ${i} é: ${imparOuPar}`)

}

