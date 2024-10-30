const data = new Date()
console.log(data.toString());

console.log(` `);

console.log( `Ano`, data.getFullYear());
console.log( `Mês`, data.getMonth() + 1);
console.log( `dia`, data.getDate());
console.log( `Hora`, data.getHours());
console.log( `Minutos`, data.getMinutes());
console.log( `Segundos`, data.getSeconds());
console.log( `Milisegundos`, data.getMilliseconds());
console.log( `Dia da Semana`, data.getDay() + 1);

