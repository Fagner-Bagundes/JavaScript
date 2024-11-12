/* 
Imagine que você quer impedir que  propriedades expecíficas de um objeto seja alteradas, pode ser uma, duas, 10....


congelar uma -> defineProperty
varias -> defineProperties

*/

function Produto(nome, preco, estoque) {
    // defineProperties:
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
    
    // defineProperty:
    Object.defineProperty(this, `estoque`, {
        enumerable: true, // enumera e mostra a chave
        value: estoque, // atribue um valor a chave(qulquer valor)
        writable: false,  // define se achave pode ser reatribuida
        configurable: false // define se  a chave pode ser reconfigurada ou apagada no futura
    });
    
}

const p1 = new Produto(`Camisa`, 20, 3)
delete p1.estoque; // configurable não permite apagar
console.log(p1);

console.log(` `);

p1.nome = `PC`;
p1.preco = 3000;
console.log(p1);
console.log(Object.keys(p1)); //mostra só as chaves de um objetos em uma array, mostra chavas que estão enumeradas

console.log(`    `);
console.log(`---------------------------------`);







    // defineProperties:
let produto = {}
 


Object.defineProperties(produto, {
    nome: {
        enumerable: true,
        value: `Casa`,
        writable: false,
        configurable: false,
    },
    preco: {
        enumerable: true,
        value: 3000000,
        writable: true,
        configurable: true
    },
}),


// defineProperty:
Object.defineProperty(produto, `estoque`, {
    enumerable: true, // enumera e mostra a chave
    value: 1, // atribue um valor a chave(qulquer valor)
    writable: false,  // define se achave pode ser reatribuida
    configurable: false // define se  a chave pode ser reconfigurada ou apagada no futura
})

console.log(produto);

    




