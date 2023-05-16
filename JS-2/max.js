// escribe la función max acá
function max(arreglo){
let maxValue = 0;
if (arreglo.length) {
arreglo.forEach ((elemento) => {
if (elemento > maxValue) maxValue = elemento;
});
return maxValue;
}
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined