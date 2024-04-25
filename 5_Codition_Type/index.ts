//Declarando un tipo
type Perro = {
    nombrePerro: string;
    edadPerro: number
    ladra: boolean
}

//Declarando un tipo
type Gato = {
    nombreGato: string;
    edadGato: number;
    trepa: boolean
}

//Declarando un tipo y pasando un "Generico con los tipos declarados anteriormente"
type TipoAnimal<T extends Perro | Gato> = T extends Perro ? Perro : Gato;

//Funcion con parametro Genericos
function seleccionAnimal<T extends Perro | Gato>(animal: TipoAnimal<T>){
    console.log(animal)    
}

//LLamando a la funcion con el parametro Perro o Tipo Perro
seleccionAnimal<Perro>({
    nombrePerro: "Pero1",
    edadPerro: 2,
    ladra: true
})

//LLamando a la funcion con el parametro Gato o Tipo Gato
seleccionAnimal<Gato>({
    nombreGato: "Gato-4",
    edadGato: 7,
    trepa: true
})