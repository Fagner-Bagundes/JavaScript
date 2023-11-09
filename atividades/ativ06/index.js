let numero = prompt(`Digite um numero`)

numero = Number(numero)

document.body.innerHTML += `<h2>Seu numero é: ${numero} </h2> `;

document.body.innerHTML += `Raiz quadrada: ${numero * 1} <br />`;

document.body.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)} <br />`;

document.body.innerHTML += `${numero} é um NaN?:  ${Number.isNaN(numero)} <br />`;

document.body.innerHTML += `Seu numero aredondado para cima: ${Math.ceil(numero)} <br />`

document.body.innerHTML += `Seu numero aredondado para baixo: ${Math.floor(numero)} <br />`

document.body.innerHTML += `Seu numero em duas casas decimais: ${numero.toFixed(2)}`

