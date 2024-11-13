/*
1.Object.values --> retorna os valores das chaves
2.Object.entries --> ele renorna a chave e os valores dentro de arrays
3.Object.assign(des, any) --> copia um objeto a uma nova variável 
4.Object.getOwnPropertyDescriptor(objt, `chave`) --> mostra a configuração da propriedade
5. (...) spread
 
// já vimos:
object.keys (retorna as chaves)
object.freeze (congela o objeto)
Object.defineProperties (define propriedades)
Object.defineProperty (define apenas uma proprieda
*/






const produto = { nome: `Caneca`, preco: 1.8};

Object.defineProperties(produto, {
    cor: {
        value: `black`
    },

    estanpa: {
        value: `goku`,
        writable: true,
        enumerable: true,
        configurable: false
    }
})


console.log(Object.getOwnPropertyDescriptor(produto, `estanpa`));
