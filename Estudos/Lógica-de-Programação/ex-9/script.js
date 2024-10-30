const data = new Date();
const diaSemana = data.getDay() + 1;
let diaSemanaTxt;
const diaSemana2 = (new Date(`2024-01-05 00:00:00`)).getDay() + 1;


if (diaSemana === 1) diaSemanaTxt = `Domingo`;
if (diaSemana === 2) diaSemanaTxt = `Segunda`;
if (diaSemana === 3) diaSemanaTxt = `Terça`;
if (diaSemana === 4) diaSemanaTxt = `Quarta`;
if (diaSemana === 5) diaSemanaTxt = `Quinta`;
if (diaSemana === 6) diaSemanaTxt = `Sexta`;
if (diaSemana === 7) diaSemanaTxt = `Sabado`
console.log(`Hoje é ${diaSemanaTxt}, dia: ${diaSemana}`);

console.log(`_____________________________________________`)

switch (diaSemana2){
    case 1:
        diaSemanaTxt = `domingo`
        break;
    case 1:
        diaSemanaTxt = `segunda`
        break;
    case 3:
        diaSemanaTxt = `terça`
        break;
    case 4:
        diaSemanaTxt = `quarta`
        break;
    case 5:
        diaSemanaTxt = `quinta`
        break;
    case 6:
        diaSemanaTxt = `sexta`
        break;
    case 7:
        diaSemanaTxt = `sabado`
        break;
}

console.log(`Hoje é ${diaSemanaTxt}, dia: ${diaSemana2}`);


