const url = `https://jsonplaceholder.typicode.com/posts`

const loading = document.querySelector(`#loading`)
const postsContainer = document.querySelector(`#posts-container`)

// url do post

const urlPost = new URLSearchParams(window.location.search)
const postID = urlPost.get(`id`)
// pagina do post individual
const postPage = document.querySelector(`#post`);;
const postContainer = document.querySelector(`.post-container`)
const commentsContainer= document.querySelector(`.comments-container`);

// comentários inputs
const emailInput = document.querySelector(`#email`)
const bodyInput = document.querySelector(`#body`)


async function getPosts(params) {
  const response = await fetch(url);
  const data = await response.json()
  console.log(data);
  loading.classList.add(`hide`)

  data.map((post)=>{
    const div = document.createElement(`div`)
    div.classList.add(`post`)
    const title = document.createElement(`h1`)
    const body = document.createElement(`p`)
    const link = document.createElement(`a`)
    link.setAttribute(`target`, `_blank`)
    
    title.innerText = post.title
    body.innerText = post.body
    link.innerHTML = `Ler`
    link.setAttribute(`href`, `post.html?id=${post.id}`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)
    postsContainer.appendChild(div)

  })

}

async function getPost(id){
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
  ])
  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  loading.classList.add(`hide`)
  postPage.classList.remove(`hide`)

  const titleElement = document.createElement(`h1`) 
  const bodyElement = document.createElement(`p`)
  const div = document.createElement(`div`)
  titleElement.innerText = dataPost.title
  bodyElement.innerText = dataPost.body
  // post
  div.appendChild(titleElement)
  div.appendChild(bodyElement)
  postContainer.appendChild(div)

  dataComments.map((comments)=>{
    getComments(comments)
 
    
  })
}

function getComments(comments) {
  const div = document.createElement(`div`)
  const email = document.createElement(`h3`)
  const bodyComments = document.createElement(`p`)

  email.innerText = comments.email
  bodyComments.innerText = comments.body

  div.appendChild(email)
  div.appendChild(bodyComments)

  commentsContainer.appendChild(div)

}

async function postComment(comment) {
  const response = await fetch(`${url}/${postID}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json()
  getComments(data)
}

if (!postID) {
  getPosts()
} else{
  getPost(postID)

  // pega submit
  document.addEventListener(`submit`,(event)=>{
    event.preventDefault()

    const comment = {
      email: emailInput.value,
      body: bodyInput.value
    }
    postComment(comment)
    
  })
}