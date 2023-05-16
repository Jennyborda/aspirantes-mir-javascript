// escribe la función maxIndex acá
function maxIndex(arreglo) {
let maxIndex = 0;
let maxNum = 0;
if (arreglo.length) {
arreglo.forEach ((elemento, index)=> {
if (maxNum < elemento) {
maxIndex = index;
maxNum = elemento;
}
})
return maxIndex
}
return -1
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
