// fetch(`index2.html`)
//     .then((resposta) => {
//         if (resposta.status !== 200) throw new Error("ERRO 404 Nosso");
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e))

fetch('https://jsonplaceholder.typicode.com/posts/5')
  .then(response => response.json()) // Converte o corpo da resposta para JSON
  .then(data => console.log(data))   // Lida com os dados recebidos
  .catch(error => console.error('Erro:', error)); // Lida com erros
