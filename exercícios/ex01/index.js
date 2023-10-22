const nome = `Fagner`;
const sobrenome = `Ferreira`;
const idade = `18`;
const peso = 56;
const altura = 1.65;
let IMC;
let nascimento;

IMC = peso / (altura * altura);
nascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${nascimento}, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${IMC}`)

