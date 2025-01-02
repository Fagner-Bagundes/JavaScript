const Key = "4e017230"
const filme = "titanic"
const url = `http://www.omdbapi.com/?apikey=${Key}&t=${filme}`
const requisicao = fetch(url)
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((reject)=>{console.log("ERROR: ",  `deu erro`);
})
