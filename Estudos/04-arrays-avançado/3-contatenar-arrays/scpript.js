console.log(`concatenando essas duas Arrays usando o spread(...):`);
const a1 = [ 1,2,3]
const a2 = [4,5,6]
console.log(a1);
console.log(a2);
console.log(`Concatenado:`)
let a3 = [...a1, ...a2]
console.log(a3);
console.log(`Concatenando com arrays criadas no spread: `);
let a4 = [...a1, ...a2,...[7,8,9], `10!`]
console.log(a4);
console.log(`---------------------------------------`);
console.log(`Concatenando essas duas Arrays usando concant(): `);
const array1 = [10,20,30];
const array2 = [40,50,60];
console.log(array1);
console.log(array2);

console.log(`Concatenado:`);
const array3 = array1.concat(array2)
console.log(array3);
console.log(`Concatenando com arrays criadas no concat: `);
const array4 = array1.concat(array2, [70, 80 ,90], `100!!`)
console.log(array4);


console.log(array1 instanceof Array);








