// Reatribuição via desestruturação

let a = `A`;
let b = `B`;
let c = `C`;

[a, b, c] = [b,c,a]

console.log(a,b,c)

console.log(`-----------------------------------------------------------`);
let num1;
let num2;
let num3;

[num1, num2, num3] = [10, 20, 30]
console.log(num1, num2, num3);

console.log(`-----------------------------------------------------------------`)
const numeros = [100, 200, 300, 400, 500 ,600]

const [numero1, numero2, numero3, ...resto] = numeros
console.log(numero1, numero2, numero3, resto)

