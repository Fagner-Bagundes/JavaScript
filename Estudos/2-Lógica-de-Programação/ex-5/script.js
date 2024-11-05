/**
 * Valores avalados em false:
 * 
 * NaN ---> false
 * null ---> false
 * undefined ---> --->
 * 0 ---> false
 * "" ---> false
 */


console.log(`Fagner`&& 0 && `Ferreira` );
console.log(false || false || false);

let falaOi = () => console.log(`oi`);
const vaiExecutar = false;
console.log(vaiExecutar && falaOi())

console.log( `---------------------------------------------------`);
console.log( false || null || `Fagner` || true)

const corUsuario = `red`
const corPadrao = null
console.log(corUsuario || corPadrao);


