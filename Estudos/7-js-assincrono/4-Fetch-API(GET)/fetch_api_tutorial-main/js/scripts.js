const url = `https://jsonplaceholder.typicode.com/posts`

// Posts elemments
const loading = document.querySelector(`#loading`)
const postsContainer = document.querySelector(`#posts-container`)

// individual post
// const urlPost = URLSearchParams(window.location.search)
// const postId = urlPost.get(`id`)
// get all posts
async function getAllPosts(){
  const response = await fetch(url)
  const data = await response.json()
  loading.classList.add(`hide`)

  data.map((post)=>{
    
    // creating elements
    const div = document.createElement(`div`)
    const title = document.createElement(`h2`)
    const body = document.createElement(`p`)
    const link = document.createElement(`a`)
    // setting atributes
    link.setAttribute(`href`, `${url}?id=${post.id}`)
    // inserting cotents in elements
    title.innerText = post.title
    body.innerText = post.body
    link.innerText = `Enviar`
    // appendChild in elemmnets
    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)
    postsContainer.appendChild(div)
    
  })
  
}

getAllPosts()