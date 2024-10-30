const modo1 = document.querySelector(`.modo1`)

const dataAtual1 = new Date();
let meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Julho`, `Junho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
let dias = [`domingo`, `segunda`, `terça`, `quarta`, `quinta`, `sexta`, `sabado`,];

const zero = (data) => data >= 10 ? data : `0${data}`;

let dia = dataAtual1.getDay();
let diaMes = zero(dataAtual1.getDate());
let mes = dataAtual1.getMonth();
let ano = zero(dataAtual1.getFullYear());
let hora = zero(dataAtual1.getHours());
let min = zero(dataAtual1.getMinutes());
let datasList = [dia, mes, ano, hora, min, diaMes];
let diaFormatado;
let mesFormatado;


function formatacao(dia, mes) {
    diaFormatado = dias[datasList[dia]];
    mesFormatado = meses[datasList[mes]];
}

formatacao(0, 1);
modo1.innerHTML = `${diaFormatado}, ${diaMes} de ${mesFormatado} de ${ano} ás ${hora}:${min}`



const modo2 = document.querySelector(`.modo2`)
const dataAtual2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

modo2.innerHTML = dataAtual2.toLocaleString('pt-BR', opcoes);
// Saída: "quarta-feira, 30 de outubro de 2024"