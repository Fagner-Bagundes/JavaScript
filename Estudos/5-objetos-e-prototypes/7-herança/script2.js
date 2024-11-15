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


function Copo(nome, preco, material) {
    Produto.call(this, nome, preco)
    let estoque = 5;
    this.material = material;
    Object.defineProperty(this, `estoque`,{
        get : function(){
            if(estoque<0 || typeof estoque != `number`){
                return console.log(`digite numeros válidos`);  
            } else{
                return this.estoque = estoque
            }
            
        },
        set: function(valor){
            estoque = valor
        },
        enumerable: true
    });
    
}

Copo.prototype = Object.create(Produto.prototype);
Copo.prototype.constructor = Copo;
const caneca = new Copo(`caneca`, 5, `porcelana`)
console.log(caneca);
console.log(caneca.estoque);
caneca.estoque = 30;
console.log(caneca.estoque);







// const produto = new Produto(`gen`, 111)

// const camiseta = new Camiseta(`Regata`, 7.5, `Preta`)
// camiseta.aumento(10)

// console.dir(produto);

// console.dir(camiseta);

