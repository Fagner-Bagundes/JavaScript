
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const date = new Date(0  + tresHoras + umDia);
// console.log(date.toString());


// const data = new Date(2023,10,10,17,30,40);
// console.log(data.toString( ));

// const data = new Date(`2023-11-22 14:36:34`);
// console.log(`Ano :`, data.getFullYear());
// console.log(`Mês :`, data.getMonth() + 1);
// console.log(`Dia :`, data.getDate());
// console.log(`Hora :`, data.getHours());
// console.log(`Minutos :`, data.getMinutes());
// console.log(`Segundos :`, data.getSeconds());
// console.log(`Dia da semana: `, data.getDay());

// Funcão para Formatar uma Data para os BR

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}` 
    
}

function formataData(date) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const minutos = zeroAEsquerda(data.getMinutes());
   const segundos = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

