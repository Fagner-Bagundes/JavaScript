const url = `https://jsonplaceholder.typicode.com/posts`

const loading = document.querySelector(`#loading`)
const postsContainer = document.querySelector(`#posts-container`)



async function getPosts(params) {
  const response = await fetch(url);
  const data = await response.json()
  console.log(data);

  data.map((post)=>{
    const div = document.createElement(`div`)
    div.classList.add(`post`)
    const title = document.createElement(`h1`)
    const body = document.createElement(`p`)
    const link = document.createElement(`a`)
    link.setAttribute(`href`, `/post.html?id=${post.id}`)

    title.innerText = post.title
    body.innerText = post.body
    link.innerHTML = `Ler`

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)

    postsContainer.appendChild(div)
  })

}

getPosts()