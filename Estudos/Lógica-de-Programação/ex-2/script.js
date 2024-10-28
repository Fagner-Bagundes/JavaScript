/**
 * OPERADORES LÓGICOS 
 * 
 * && --> end
 * || --> or
 * !  --> not = negação
 * 
 */


const barra = () => console.log(`______________________________________________________________`);
const espaco = () => console.log(` `);

console.log(`Usando o operador lógico &&`)
espaco();

let comparacaoEnd = "fag" === "fag" && "Fagner" === "Fagner"
console.log(`"fag" é igual a "fag" E "Fagner" é igual a "Fagner"?: ${comparacaoEnd}`)
espaco();

let comparacaoEnd2 = "fag" === "fague" && "Fagner" === "Fagner"
console.log(`"fag" é igual a "fague" E "Fagner" é igual a "Fagner"?: ${comparacaoEnd2}`)
barra();

console.log(`Usando o operador Lógico || (or)`)
espaco();

let comparacaoOr = "fag" === "fague" || "Fagner" === "Fagner";
console.log(`"fag" é igual a "fague" OU "Fagner" é igual a "Fagner"?: ${comparacaoOr}`);
espaco();

let comparacaoOr2 = "fag" === "fague" || "Fagner" === "Fagnelson";
console.log(`"fag" é igual a "fague" OU "Fagner" é igual a "Fagnelson"?: ${comparacaoOr2}`)
barra();


console.log(`invertendo um valor true com o !: `);
espaco();

let comparacaoNot = true
console.log(`Valor original: ${comparacaoNot}`);
console.log(`Valor invertido: ${!comparacaoNot}`);

