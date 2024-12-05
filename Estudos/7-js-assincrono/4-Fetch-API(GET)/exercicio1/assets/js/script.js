const url = `https://jsonplaceholder.typicode.com/posts`
const main = document.querySelector(`main`)
const requisisao = fetch(url)

requisisao
.then((response)=> response.json())
.then((data) => {
    data.map((valor)=>{
        main.innerHTML += valor.title
        console.log(valor);
        
    })
}) 