const url = `https://jsonplaceholder.typicode.com/posts`

const loadingElement = document.querySelector(`#loading`)
const postContainer = document.querySelector(`#posts-container`)


// pega todos os posts
async function getAllPosts() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data);

  loadingElement.classList.add(`hide`)
  
  data.map((post) =>{
    
  })
};

getAllPosts()