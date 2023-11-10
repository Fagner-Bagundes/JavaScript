let numero = Number(prompt(`Digite um número:`))

let titulo = document.getElementById(`numeroTitulo`)

titulo.innerHTML += `${numero}`

let texto = document.getElementById(`texto`)

texto.innerHTML += `
<p> 
  Raiz quadrada do seu numero: ${numero ** 0.5}
</p>

<p>
  O seu numero é inteiro?: ${Number.isInteger(numero)}
</p>

<p>
  O seu número é NaN?: ${Number.isNaN(numero)}
</p>

<p> 
  Seu número arredondado para baixo: ${Math.floor(numero)}
</p>

<p>
  Seu número arredondado para cima: ${Math.ceil(numero)}
</p>

<p> 
  Seu número com duas casa decimais: ${numero.toFixed(2)}
</p>

`

//  para pegar a raiz quadrada, basta fazer: valor ** 0.5


