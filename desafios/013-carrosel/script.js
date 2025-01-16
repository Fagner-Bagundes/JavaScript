const postersContainer = document.querySelector(`.posters-container`)

console.log(postersContainer);

const imgs = [
    {id: 1, url: `./imgs/berserk.png`},
    {id: 2, url: `./imgs/bleach.png`},
    {id: 3, url: `./imgs/jojo.jpg`},
    {id: 4, url: `./imgs/one-piece.jpg`},
    {id: 5, url: `./imgs/vagabond.jpg`},
    {id: 6, url: `./imgs/vinland.jpg`}

]

function addPosts() {
    imgs.forEach((img)=>{
        postersContainer.innerHTML += `
           <img class="poster" id="${img.id}" src="${img.url}" alt="">
        `
    })
}

addPosts()