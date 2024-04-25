//Funcion con parametro Genericos
function seleccionAnimal(animal) {
    console.log(animal);
}
//LLamando a la funcion con el parametro Perro o Tipo Perro
seleccionAnimal({
    nombrePerro: "Pero1",
    edadPerro: 2,
    ladra: true
});
//LLamando a la funcion con el parametro Gato o Tipo Gato
seleccionAnimal({
    nombreGato: "Gato-4",
    edadGato: 7,
    trepa: true
});
