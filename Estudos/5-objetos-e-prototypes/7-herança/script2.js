function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}


function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    // Camiseta.prototype.constructor = Camiseta
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual /100))
}


function Copo(nome, preco, meterial) {
    Produto.call(this, nome, preco)
    
}

Copo.prototype = Object.create(Produto.prototype);
Copo.prototype.constructor = Copo;
const caneca = new Copo(`caneca`, 5, `porcelana`)
console.log(caneca);
caneca.aumento(20)
console.log(caneca);








// const produto = new Produto(`gen`, 111)

// const camiseta = new Camiseta(`Regata`, 7.5, `Preta`)
// camiseta.aumento(10)

// console.dir(produto);

// console.dir(camiseta);

