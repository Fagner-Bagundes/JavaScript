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
        let content = [poster,titulo, ano, atores, diretor] = [data.Poster,data.Title, data.Year, data.Actors, data.director]

        
        
        

    }
    catch(error){
        console.log(`ERROR:`, error);
    }
}


requisicao()