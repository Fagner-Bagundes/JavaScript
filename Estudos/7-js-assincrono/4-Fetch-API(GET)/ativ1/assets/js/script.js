const btn = document.querySelectorAll(`button`)
const divPage = document.querySelector(`#pagina`)

console.log(btn);

// async function getPage(parms) {
//     const response = await fetch(`pagina1.html`)
//     const data = await response.text()
//     addPagina(data)
    
// }


// function addPagina(pagina) {
//     divPage.innerHTML = pagina
// }

btn.addEventListener(`click`,(event)=>{
    const button = event.target
    console.log(button);
    
    
    // getPage()
})