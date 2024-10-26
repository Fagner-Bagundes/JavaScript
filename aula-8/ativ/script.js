const nome = prompt(`Digite o seu nome`);
const titulo = document.querySelector(`.titulo`);


let tantoLetras = nome.replace(/ /g, "");


titulo.innerHTML += `Seu nome é: ${nome} <br>`
titulo.innerHTML += `Seu nome tem ${tantoLetras.length} letras <br>`
titulo.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br>`
titulo.innerHTML += `o primeiro índice da letra "r" no seu nome é: ${nome.indexOf(`r`)} <br>`
titulo.innerHTML += `o último índice da letra "r" do seu nome é ${nome.lastIndexOf(`r`)} <br>`
titulo.innerHTML += `As 3 últimas letras do seu nome são: ${ nome.slice(-3)} <br>`
titulo.innerHTML += `As palavras do seu nome são: ${nome.split(/ /g)} <br>`
titulo.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br>`
titulo.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br>`







