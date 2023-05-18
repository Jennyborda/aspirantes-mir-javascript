const persona = {
	nombre: "Jenny Borda",
	edad: 43,
ciudad: "Bogota",
	profesion: "Ama de Casa",
}

console.log(persona);

function presentacion(person) {
	return `Hola, mi nombre es ${person.nombre},
	tengo ${person.edad} años, soy de ${persona.ciudad}
	y soy ${person.profesion}`
	}

	const mensaje = presentacion(persona);
	console.log(mensaje);

	persona.hobbies = ["programar","patinar", "leer"]
	console.log(persona.hobbies);

	for (const hobbie of persona.hobbies) {
  console.log(hobbie);
  }
