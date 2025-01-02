const container = document.querySelector(`.container`)
const poster = document.querySelector(`.poster`)
const description = document.querySelector(`.description`)

const Key = "4e017230"
const filme = "titanic"
const url = `http://www.omdbapi.com/?apikey=${Key}&t=${filme}`



async function requisicao() {
    try{
        const response = await fetch(url)
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
            // console.log(valor);
            
            // adicionadno no html

            const p = criaTags(`p`)
            p.innerHTML = `${descriNomes[i]}: ${valor}`
            console.log(p);  
            description.appendChild(p)
         })  
     
    }
    catch(error){
        console.log(`ERROR:`, error);
    }
}



requisicao()