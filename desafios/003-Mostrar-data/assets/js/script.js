
// Primeiro modo de fazer, mais manual
const modo1 = document.querySelector(`.modo1`)

const dataAtual1 = new Date();
let meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Julho`, `Junho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
let dias = [`domingo`, `segunda`, `terça`, `quarta`, `quinta`, `sexta`, `sabado`,];

const zero = (data) => data >= 10 ? data : `0${data}`;

const dia = dataAtual1.getDay();
const diaMes = zero(dataAtual1.getDate());
const mes = dataAtual1.getMonth();
const ano = zero(dataAtual1.getFullYear());
const hora = zero(dataAtual1.getHours());
const min = zero(dataAtual1.getMinutes());
let diaFormatado;
let mesFormatado;

function formatacao(dia, mes) {
    diaFormatado = dias[dia];
    mesFormatado = meses[mes];
}

formatacao(dia, mes);
modo1.innerHTML = `${diaFormatado}, ${diaMes} de ${mesFormatado} de ${ano} ás ${hora}:${min}`

// Segundo modo de fazer mais automatizado:
const modo2 = document.querySelector(`.modo2`)
const dataAtual2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

modo2.innerHTML = dataAtual2.toLocaleString('pt-BR', opcoes);
// Saída: "quarta-feira, 30 de outubro de 2024"