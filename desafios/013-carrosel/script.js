const postersContainer = document.querySelector(`.posters-container`)
const avancarb = document.querySelector(`#avancar`)
const voltarb = document.querySelector(`#voltar`)
const selects = document.querySelectorAll(`.select`)

const imgs = [
    {id: `id1`, url: `./imgs/berserk.png`},
    {id: `id2`, url: `./imgs/bleach.png`},
    {id: `id3`, url: `./imgs/jojo.jpg`},
    {id: `id4`, url: `./imgs/one-piece.jpg`},
    {id: `id5`, url: `./imgs/vagabond.jpg`},
    {id: `id6`, url: `./imgs/vinland.jpg`}

]
addPosts()

function addPosts() {
    imgs.forEach((img, i)=>{
        postersContainer.innerHTML += `
           <img class="poster" id="${img.id}" src="${img.url}" alt="">
        `;
        selects[i].id = `${img.id}`
    })
    postersContainer.firstElementChild.classList.add(`first`)
}


const atualiza = ()=> document.querySelectorAll(`.poster`)

function btsActive(pos) { 
    atualiza().forEach((post, i)=>{
        if (post.classList.contains(`first`)) return selects[i].classList.add(`ativ`)
            selects[i].classList.remove(`ativ`)
    })
}

voltarb.addEventListener(`click`,(e)=>{
    postersContainer.appendChild(atualiza()[0])
    btsActive(atualiza)    
})

avancarb.addEventListener(`click`, (e)=>{
    const ultimo = postersContainer.lastElementChild
    postersContainer.prepend(ultimo)
    btsActive()
})



