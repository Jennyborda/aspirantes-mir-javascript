function join(arreglo) {
let cadena = "";
arreglo.forEach(elemento => {
cadena += elemento + ""
})  
return cadena.trimEnd()
}
console.log(join(["feliz", " dia"])); // "feliz dia"
console.log(join(["Dios", " te", " bendiga"])); //"Dios te bendiga" 
console.log(join([])); // ""