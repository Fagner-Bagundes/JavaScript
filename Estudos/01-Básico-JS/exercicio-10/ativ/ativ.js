let title = document.getElementById(`title`)
let conteudo = document.getElementById(`conteudo`)

const number = Number(prompt(`Digite um numero`))

title.innerHTML += number;

conteudo.innerHTML += `<p> A raiz quadrada do seu numero é: ${number ** 0.5}</p>` ;
conteudo.innerHTML += `<p> O seu numero é inteiro?:${Number.isInteger(number)} </p>`;

conteudo.innerHTML += `<p> O Seu numero não é um numero valido: ${Number.isNaN(number)}</p>`;

conteudo.innerHTML += `<p> Seu numero arredondado para baixo: ${Math.floor(number)}</p>`;
conteudo.innerHTML += `<p> seu numero arredondado para cima: ${Math.ceil(number)}</p>`;
conteudo.innerHTML += `<p> Seu numero com duas casas decimais: ${number.toFixed(2)}</p>`;
