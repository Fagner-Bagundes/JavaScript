
// Uma promise é criada usando o construtor Promise, que recebe uma função de callback com dois argumentos: resolve e reject.

const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = false;

  if (sucesso) {
    resolve("A operação foi bem-sucedida!");
  } else {
    reject("Houve um erro.");
  }
});

minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(() => {
    console.log("Operação finalizada.");
    console.log(` `);
  });


//   Aqui está um exemplo mais realista, simulando uma operação assíncrona com setTimeout.

const buscaDados = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const dados = false
        if (dados) {
            resolve(dados)
        }else{
            reject(`Dados nao encontrados`)
        }
    }, 2000)
})

buscaDados
.then((resultado)=>console.log(`Dados encontrados:`, resultado))
.catch((error)=>console.log(`Erro: `, error))
.finally(()=>console.log(`Operação finalizada`))