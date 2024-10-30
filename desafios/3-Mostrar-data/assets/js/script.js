const modo1 = document.querySelector(`.modo1`)
const modo2 = document.querySelector(`.modo2`)








const dataAtual2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

modo2.innerHTML = dataAtual2.toLocaleString('pt-BR', opcoes)
// Saída: "quarta-feira, 30 de outubro de 2024"