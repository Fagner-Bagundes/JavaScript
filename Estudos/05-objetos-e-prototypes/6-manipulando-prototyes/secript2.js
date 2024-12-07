function Produto(nome, preco, vendas){
    this.nome = nome;
    this.preco = preco;
    this.vendas = vendas;
}

Produto.prototype.resultadoVendas = function() {
    return this.preco * this.vendas
}

let p1 = new Produto(`Camisa`, 20, 40)
console.log(p1);
console.log(p1.resultadoVendas(30))



const p2 = {
    nome: `calça`,
    preco: 30,
    vendas: 4
}

Object.setPrototypeOf(p2, p1)
console.log(p2.resultadoVendas());
console.log(p2);

// Voce pode já criar um obejeto e já settar o prototype dele, na sua criação:

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: `caderno`
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    },
    vendas: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    }
});
console.log(p3);

console.log(p3.resultadoVendas());
Array.prototype.firfsfsfsfsfsdfsst = function() {
    return this[0];
  };
  
  const numbers = [1, 2, 3];
  console.log(numbers.firfsfsfsfsfsdfsst()); // 1
console.dir(Array);

