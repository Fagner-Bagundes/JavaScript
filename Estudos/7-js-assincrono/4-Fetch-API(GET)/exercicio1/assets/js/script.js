const url = `https://jsonplaceholder.typicode.com/posts/1`

const requisisao = fetch(url)

requisisao
.then((response)=> response.json())
.then((data) => console.log(data))