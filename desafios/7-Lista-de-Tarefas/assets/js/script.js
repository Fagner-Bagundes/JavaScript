const tarefas = document.querySelector(`.tarefas`);

const inputTarefa = document.querySelector(`.input-tarefa`);
const inputBtn = document.querySelector(`.btn-tarefa`);

function criaLi() {
    const li =document.createElement(`li`);
    return li;
    
};

function limpaInput(){
    inputTarefa.value = ``
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerText += ` `;
    const BotaoApagar = document.createElement(`button`);
    BotaoApagar.innerText = `Apagar`;
    li.appendChild(BotaoApagar);
    BotaoApagar.setAttribute(`class`, `apagar`)
};

function criaTarefa(textoInput) {
    const li = criaLi()
    tarefas.appendChild(li)
    li.innerHTML = textoInput;
    criaBotaoApagar(li)
    limpaInput()

};

inputBtn.addEventListener(`click`,(e)=>{
    if (!inputTarefa.value) return;
    console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);


});

inputTarefa.addEventListener(`keypress`, (e)=>{
    if(e.key === `Enter`){
        console.log(`Enter`);
        criaTarefa(inputTarefa.value);

    };
});


document.addEventListener(`click`, (e)=>{
    const el = e.target;
    if (el.classList.contains(`apagar`)){
        console.log(el.parentElement);
        el.parentElement.remove()
        
    }
    
})