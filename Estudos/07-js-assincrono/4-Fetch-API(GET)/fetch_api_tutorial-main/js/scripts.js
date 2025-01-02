const url = `https://jsonplaceholder.typicode.com/posts`

// Posts elemments
const loading = document.querySelector(`#loading`)
const postsContainer = document.querySelector(`#posts-container`)

// Post elemment
const postElement = document.querySelector(`#post`)
const postContainer = document.querySelector(`.post-container`)
const commentsContainer = document.querySelector(`.comments-container`)
// individual post url
const urlPost = new URLSearchParams(window.location.search)
const postId = urlPost.get(`id`)

// get all posts
async function getAllPosts() {
  const response = await fetch(url)
  const data = await response.json()
  loading.classList.add(`hide`)

  data.map((post) => {
    // creating elements
    const div = document.createElement(`div`)
    const title = document.createElement(`h2`)
    const body = document.createElement(`p`)
    const link = document.createElement(`a`)
    // setting atributes
    div.classList.add(`div-post`)
    link.setAttribute(`target`, `_blank`)
    link.setAttribute(`href`, `post.html?id=${post.id}`)
    // inserting cotents in elements
    title.innerText = post.title
    body.innerText = post.body
    link.innerText = `ver`
    // appendChild in elemmnets
    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)
    postsContainer.appendChild(div)

  })

}

// get Individual post
async function getIndivualPost(id) {
  let [indPost, indComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${postId}/comments`)
  ])

  loading.classList.add(`hide`)
  postElement.classList.remove(`hide`)
  const post = await indPost.json()
  const comments = await indComments.json()

  // crating elements
  const div = document.createElement(`div`)
  const title = document.createElement(`h1`)
  const body = document.createElement(`p`)
  const link = document.createElement(`a`)
  link.setAttribute(`href`, `index.html`)


  title.innerText = post.title
  body.innerText = post.body
  link.innerText = `Voltar`

  div.appendChild(title)
  div.appendChild(body)
  div.appendChild(link)
  div.classList.add(`div-post`)
  postContainer.appendChild(div)

  getComment(comments)
}

// get comments
function getComment(comments) {
  comments.map((comment) => {
    const div = document.createElement(`div`)
    const email = document.createElement(`h1`)
    const body = document.createElement(`p`)

    email.innerText = comment.email
    body.innerText = comment.body

    div.appendChild(email)
    div.appendChild(body)
    commentsContainer.appendChild(div)
  })

}

// add comment
async function addComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: `POST`,
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json"
    }
  })
  const data = await response.json()
  const comments = [data]
  console.log(data);

  getComment(comments)
}

if (!postId) {
  getAllPosts()
} else {
  getIndivualPost(postId)
  // listener of event submit
  document.addEventListener(`submit`, (event) => {
    event.preventDefault()
    const email = (document.querySelector(`#email`).value)
    const body = (document.querySelector(`#body`).value)
    const comment = {
      email: email,
      body: body
    }
    addComment(comment)
  })
}