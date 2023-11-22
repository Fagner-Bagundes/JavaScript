function global() {
    const data = new Date();
    let diaEmTexto;
    let mesEmtexto;

    function formatadorData(valor) {
        const dia = data.getDate();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minutos = data.getMinutes();
        const diaSemana = data.getDay();
        
        return [dia, mes, ano, hora, minutos, diaSemana]
    }
const novaData = formatadorData();


function getDiaEmTexto(diaSemana) {
    switch (novaData[5]) {
        case 0:
            diaEmTexto = `Domingo`
            return diaEmTexto;
        case 1:
            diaEmTexto = `Segunda-feira`
            return diaEmTexto;
        case 2:
            diaEmTexto = `Terça-feira`
            return diaEmTexto;
        case 3:
            diaEmTexto = `Quarta-feira`
            return diaEmTexto;
        case 4: 
        diaEmTexto = `Quinta-feira`
            return diaEmTexto;
        case 5:
            diaEmTexto = `Sexta-feira`
            return diaEmTexto;
        case 6:
            diaEmTexto = `Sabado`
            return diaEmTexto;
        default:
            diaEmTexto = ``
            return diaEmTexto;
    }
    
}


    function getMesEmTexto(texto) {
        switch(novaData[1]){
            case 0:
                mesEmtexto = `Janeiro`
                return mesEmtexto;
            case 1:
                mesEmtexto = `Fevereiro`
                return mesEmtexto;
            case 2:
                mesEmtexto = `Março`
                return mesEmtexto;
            case 3:
                mesEmtexto = `Abril`
                return mesEmtexto;
            case 4:
                mesEmtexto = `Maio`
                return mesEmtexto;
            case 5:
                diaEmTexto = `Junho`
                return diaEmTexto;
            case 6: 
                mesEmtexto = `Julho`
                return diaEmTexto;
            case 7:
                mesEmtexto = `Agosto`
                return mesEmtexto;
            case 8:
                mesEmtexto = `Setembro`
                return mesEmtexto;
            case 9:
                mesEmtexto = `Outubro`
                return mesEmtexto;
            case 10:
                mesEmtexto = `Novembro`
                return mesEmtexto;
            case 11:
                mesEmtexto = `Dezembro`
                return mesEmtexto;
                default:
                    mesEmtexto = ``
                    return mesEmtexto;
        }  
}


diaEmTexto = getDiaEmTexto(novaData);
mesEmtexto = getMesEmTexto(novaData)
    console.log(`${diaEmTexto}, ${novaData[0]} de ${mesEmtexto} de ${novaData[2]} as ${novaData[3]}:${novaData[4]}`);


    const area = document.querySelector(`h2`)
    area.innerHTML = `Teu boga foi queimado hoje, ${diaEmTexto}, dia ${novaData[0]} de ${mesEmtexto} de ${novaData[2]} as ${novaData[3]}:${novaData[4]}`
}
    global();