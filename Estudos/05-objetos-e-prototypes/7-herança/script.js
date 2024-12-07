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

// voce tem que chamar a função Produtos dentro da função camisa

// Para isso voce tem que usar um mentedo que tem dentro de todas a funções chamada call()

// dentro dele voce tem que passar quem vai ser o this da função, ele não passsa o prototype da função
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    // Camiseta.prototype.constructor = Camiseta
}

// vc deve criar um objeto vazio e setar o prototype dele, no Produto 

Camiseta.prototype = Object.create(Produto.prototype)
// Funcionou, mas arrumou outro problema, quando vc usa o create, o js acaba fazendo com que o construtor da Camiseta vire o Produuto e não a camiseta
// Para resolver isso, você faz isso: 
Camiseta.prototype.constructor = Camiseta

const produto = new Produto(`gen`, 111)
const camiseta = new Camiseta(`Regata`, 7.5, `Preta`)
camiseta.aumento(10)
console.dir(produto);

console.dir(camiseta);




// Camiseta herda tudo o que tem em produto, mas tbm pode ser suas coisas específicas, pode colocar propriedades amais do que o o Produto