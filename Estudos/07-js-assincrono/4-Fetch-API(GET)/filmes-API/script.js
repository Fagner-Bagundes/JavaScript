const container = document.querySelector(`.container`)
const poster = document.querySelector(`.poster`)
const description = document.querySelector(`.description`)
const filmePesquisa = document.querySelector(`#film`)
const botao = document.querySelector(`#buscar`)

const Key = "4e017230"
let url = `http://www.omdbapi.com/?apikey=${Key}&t=`

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getInputcontent(film) {
    removeAllChildNodes(poster)
    removeAllChildNodes(description)
    requisicao(film)

}

botao.addEventListener(`click`,(e)=>{
    if (filmePesquisa.value) {
        getInputcontent(filmePesquisa.value)
    }else{
        console.log(`digite um filme valido`);
        
    }
})

async function requisicao(film) {
    try{
        const response = await fetch(`${url}${film}`)
        const data = await response.json()
        console.log(data)
        let post = data.Poster
        let [titulo, ano, atores, diretor] = [data.Title, data.Year, data.Actors, data.Director]
        const descri = [titulo, ano, atores, diretor]
        const descriNomes = [`Titulo`, `ano`, `Atores`, `Diretor`]

        function criaTags(tag) {
            if (tag === `p`) return p = document.createElement(`p`)
            if (tag === `img`) return document.createElement(`img`)
        }
        
        const img = criaTags(`img`)
        img.setAttribute("src", post)
        poster.appendChild(img)

         descri.map((valor, i)=>{
            const p = criaTags(`p`)
            p.innerHTML = `${descriNomes[i]}: ${valor}` 
            description.appendChild(p)
         })  
     
    }
    catch(error){
        console.log(`ERROR:`, error);
    }
}
