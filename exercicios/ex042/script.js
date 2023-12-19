


/* 
funções recursivas: são funções que podem 
se autp chamar dentro de si mesmas, pode ser
 usando pra repetir a mesma função.

*/

function recursiva(max) {
    if (max >= 11300 ) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(1);