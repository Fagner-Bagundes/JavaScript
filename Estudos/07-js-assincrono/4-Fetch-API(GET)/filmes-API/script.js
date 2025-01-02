const container = document.querySelector(`.container`)
const poster = document.querySelector(`.poster`)
const description = document.querySelector(`.description`)
const filmePesquisa = document.querySelector(`#film`)
const botao = document.querySelector(`#buscar`)
const aviso = document.querySelector(`.aviso`)

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
    if (aviso) {
        aviso.innerHTML = ``
    }
    if (filmePesquisa.value) {
        getInputcontent(filmePesquisa.value)
    }else{
        aviso.innerHTML = `Digite um nome válido`
    }
})

filmePesquisa.addEventListener(`keydown`,(e)=>{
    if(e.key === "Enter"){
        if (filmePesquisa.value) {
            getInputcontent(filmePesquisa.value)
        }else{
            aviso. innerHTML = `Digite um nome válido`
        }
    }
})




async function requisicao(film) {
    try{


        const response = await fetch(`${url}${film}`)
        const data = await response.json()
        // console.log(data)

        console.log(data.Error);
        if (data.Error) {
            console.log(`deu erro`);
            aviso.innerHTML = `Nome inválido`
            return
        }

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
        img.setAttribute("alt", "sem poster")
        poster.appendChild(img)

         descri.map((valor, i)=>{
            const p = criaTags(`p`)
            p.innerHTML = `${descriNomes[i]}: ${valor}` 
            description.appendChild(p)
         })  

         console.log(film);
         
     
    }
    catch(error){
        console.log(`ERROR:`, error);
    }
}
