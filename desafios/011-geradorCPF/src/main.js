import { GeraCPF } from './modules/GeraCPF';

import './assets/css/style.css';

function adicionaCPF(div) {
    const geraCPF = new GeraCPF()
    const cpf = geraCPF.novoCPF()
    div.innerHTML = cpf
}
const div = document.querySelector(`.cpf-gerado`)
adicionaCPF(div)

