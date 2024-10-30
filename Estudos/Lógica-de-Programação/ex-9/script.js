const data = new Date();
const diaSemana = data.getDay() + 1;
let diaSemanaTxt;


if (diaSemana === 1) diaSemanaTxt = `Domingo`;
if (diaSemana === 2) diaSemanaTxt = `Segunda`;
if (diaSemana === 3) diaSemanaTxt = `Terça`;
if (diaSemana === 4) diaSemanaTxt = `Quarta`;
if (diaSemana === 5) diaSemanaTxt = `Quinta`;
if (diaSemana === 6) diaSemanaTxt = `Sexta`;
if (diaSemana === 7) diaSemanaTxt = `Sabado`



console.log(`Hoje é ${diaSemanaTxt}, dia: ${diaSemana}`);
