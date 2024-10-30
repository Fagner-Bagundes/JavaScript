const modo1 = document.querySelector(`.modo1`)
const modo2 = document.querySelector(`.modo2`)


const dataAtual1 = new Date();
let meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Julho`, `Junho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
let dias = [`domingo`, `segunda`, `terça`, `quarta`, `quinta`, `sexta`, `sabado`,];


let formataDia = (dia) => dataList[dia] = meses[dia];
let formataMes = (mes) => dataList[mes] = meses[mes];

const zero = (data) => data >= 10 ? data : `0${data}`;

let dia = dataAtual1.getDay();
let mes = dataAtual1.getMonth();
let ano = zero(dataAtual1.getFullYear());
let hora = zero(dataAtual1.getHours());
let min = zero(dataAtual1.getMinutes());
let dataList = [dia, mes, ano, hora, min];

formataDia(0);
formataMes(1);

console.log(dataList[0]);
console.log(dataList[1]);







const dataAtual2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

modo2.innerHTML = dataAtual2.toLocaleString('pt-BR', opcoes);
// Saída: "quarta-feira, 30 de outubro de 2024"