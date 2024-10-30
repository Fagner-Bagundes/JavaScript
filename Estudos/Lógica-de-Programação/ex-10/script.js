// Reatribuição via desestruturação

const barra = () => console.log(`-------------------------------------------------------`);


let a = `A`;
let b = `B`;
let c = `C`;

[a, b, c] = [b,c,a];

console.log(a,b,c);


barra();
let num1;
let num2;
let num3;

[num1, num2, num3] = [10, 20, 30];
console.log(num1, num2, num3);
barra();

const numeros = [100, 200, 300, 400, 500 ,600];
const [numero1, numero2, numero3, ...resto] = numeros;
console.log(numero1, numero2, numero3, resto);
barra()

const listas = [[1,2,3], [4,5,6], [7,8,9]]
console.log(listas);


const [lista1, lista2, lista3] = listas
console.log(lista2);

const n6 = lista2[2]
console.log(n6);


