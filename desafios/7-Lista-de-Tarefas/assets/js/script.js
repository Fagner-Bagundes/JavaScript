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

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll(`li`);
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
        ;
        
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem(`tarefas`, tarefasJSON);
    console.log(tarefasJSON);

}

function criaTarefa(textoInput) {
    const li = criaLi()
    tarefas.appendChild(li)
    li.innerHTML = textoInput;
    criaBotaoApagar(li)
    limpaInput();
    salvarTarefas();

};

inputBtn.addEventListener(`click`,(e)=>{
    if (!inputTarefa.value) return;
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
        el.parentElement.remove()
        salvarTarefas()
        
    }
    
})

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem(`tarefas`)
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)

    }
}
adicionaTarefasSalvas()