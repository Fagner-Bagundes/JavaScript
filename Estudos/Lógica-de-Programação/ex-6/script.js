const data1 = new Date()
console.log(data1.toString());

console.log(` `);

console.log( `Ano`, data1.getFullYear());
console.log( `Mês`, data1.getMonth() + 1);
console.log( `dia`, data1.getDate());
console.log( `Hora`, data1.getHours());
console.log( `Minutos`, data1.getMinutes());
console.log( `Segundos`, data1.getSeconds());
console.log( `Milisegundos`, data1.getMilliseconds());
console.log( `Dia da Semana`, data1.getDay() + 1);

console.log(`---------------------------------------------------------`)

const data2 = new Date()

function formataDatas(data2) {

    let adiciona0 = (valor) => valor >= 10 ? valor : `0${valor}`

    let datas = {
        dia: adiciona0(data2.getDate()),
        mes: adiciona0(data2.getMonth()),
        ano: adiciona0(data2.getFullYear()),
        hora: adiciona0(data2.getHours()),
        min: adiciona0(data2.getMinutes()),
        seg: adiciona0(data2.getSeconds()),
    }    

    console.log(`${datas.dia}/${datas.mes}/${datas.ano}  ${datas.hora}: ${datas.min}: ${datas.seg}`);
    
}

formataDatas(data2)

