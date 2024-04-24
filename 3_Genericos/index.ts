//El generic se habitita con <> y dentro de los simbolos se indica el parametro

//Interfaces con parametro generico <>
interface myInterfaceGeneric<T,U> {
    myVariable: T | U
}

const example : myInterfaceGeneric<string,number | boolean> = {
    myVariable: true
}
console.log(`Aqui es el valor del generic example: ${example.myVariable}`);


//funcion con parametro generico <>
function myFunction<T>(value: T){
    console.log(`El valor de la funcion es: ${value}`)
}

myFunction<number>(4); // Llamando a la funcion


//Funcion de flecha
const myFlecha = <T>(value:T) => {
    console.log(` El valor de la flecha es:${value}`);
}

myFlecha<boolean>(true)

//TYPE
type variableGenric <T> = {
    valor: T 
}

const MyType: variableGenric<string> ={
    valor: "Muy Rico My type"
}
console.log(MyType);

// +++++++++++++++++++++++++++  Class o Clase

//Clase de Tipo Generica
class GenericClass<T> {
    protected value: T 
    constructor(value: {new (): T}){
        this.value = new value()
    }
}

//Clase Ovj
class Ovj{
    public name: string = 'OJV';
    public age: number = 45;
}

//Clae Maria
class  Maria{
    public nameMaria: string = 'OJV';
    public ageMaria: number = 45;
}

//Creando una clase extendida de la clase generica
//Estableciendo que la clase generica es de tipo Ovj
class Greet extends GenericClass<Ovj> { 
    constructor(){
        super(Ovj)
    }    
    public hello(): void {
        console.log(`Hola, desde la clase Generrica, mi nema es: ${this.value.name}`)
    }
}

//Instanciando la Clase
new Greet().hello()


