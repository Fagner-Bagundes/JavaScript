const postersContainer = document.querySelector(`.posters-container`)
const avancarb = document.querySelector(`#avancar`)
const voltarb = document.querySelector(`#voltar`)

const imgs = [
    {id: `id1`, url: `./imgs/berserk.png`},
    {id: `id2`, url: `./imgs/bleach.png`},
    {id: `id3`, url: `./imgs/jojo.jpg`},
    {id: `id4`, url: `./imgs/one-piece.jpg`},
    {id: `id5`, url: `./imgs/vagabond.jpg`},
    {id: `id6`, url: `./imgs/vinland.jpg`}

]

function addPosts() {
    imgs.forEach((img)=>{
        postersContainer.innerHTML += `
           <img class="poster" id="${img.id}" src="${img.url}" alt="">
        `
    })
}

addPosts()
postersContainer.firstElementChild.classList.add(`first`)

voltarb.addEventListener(`click`,(e)=>{
    const posters = document.querySelectorAll(`.poster`)
    postersContainer.appendChild(posters[0])
    
})

avancarb.addEventListener(`click`, (e)=>{
    const ultimo = postersContainer.lastElementChild
    postersContainer.prepend(ultimo)
})


