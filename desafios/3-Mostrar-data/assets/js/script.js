const modo1 = document.querySelector(`.modo1`)
const modo2 = document.querySelector(`.modo2`)


const dataAtual1 = new Date();
let meses = [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Julho`,`Junho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`]
let dias = [`domingo`,`segunda`,`terça`,`quarta`,`quinta`,`sexta`,`sabado`,]


let formataDia = (dia) => dia = meses[datas[dia]]

let formataMes = (mes) => mes = meses[datas(mes)]





let datas = (data) => {
    const zero = (data) => data >= 10? data : `0data}` 

    let dia = zero(dataAtual1.getDay())
    let mes = zero(dataAtual1.getMonth())
    let ano = zero(dataAtual1.getFullYear())
    let hora = zero(dataAtual1.getHours())
    let min = zero(dataAtual1.getMinutes())
  

    return [dia, mes, ano, hora, min]
}

console.log(datas);
formataDia(datas[1]);
formataMes(datas[2]);

console.log(datas[1], datas[2]);





const dataAtual2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

modo2.innerHTML = dataAtual2.toLocaleString('pt-BR', opcoes)
// Saída: "quarta-feira, 30 de outubro de 2024"