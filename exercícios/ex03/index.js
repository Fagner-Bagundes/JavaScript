let varA = `A`;
let varB = `B`;
let varC = `C`;

const reserv = varA;

varA = varB;
varB = varC;
varC = reserv;

console.log(varA, varB, varC);