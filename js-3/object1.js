const pedro = {
	nombre: "Pedro Perez",
	edad: 30,
	activo: true,
	hobbies: ["programar","squash", "piano"]
}
// Imprime en consola llave edad
console.log(pedro.edad);

// agrega una propiedad con llave estatura y valor 1.8
pedro.altura = 1.8;

// eliminar la llave con llave activo
delete pedro.activo;

for (const [key, value] of Object.entries(pedro)) {
  console.log(`${key}: ${value}`);
}

pedro.saluda = () => {
	return `Hola, me llamo ${pedro.nombre}`
} 
console.log(pedro.saluda());
