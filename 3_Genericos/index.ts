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

myFunction<number>(4);


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



