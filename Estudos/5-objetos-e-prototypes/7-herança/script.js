/*
imagine que voce vá fazer um sitema para um dono de E-comerce, a primeira questão é:

1.O que vamos vender?
R: Camiseta, caneca


primeiro, o que eles são na minha loja?
Abstração: Produto

Agora pense, oque eles tem em comun? 
 R: nome, preco
*/

// Produto -> aumento, dessconto
// Camiseta = cor, caneca = material
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

