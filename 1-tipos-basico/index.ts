//Type String
let myStringVar: string = "Cadena de texto"
console.log(myStringVar)

//Type Number
let myNumberVar: number = 1028
console.log(myNumberVar)

//Type Boolean
let myBooleanVar: boolean = true
console.log(myBooleanVar)

//Type Null
let myNullVar: null = null
console.log(myNullVar)

//Type Undifined
let myUndefinedVar: undefined
console.log(myUndefinedVar)

//_______________Funciones
function myName(): string{
    return 'Salida de la funcion -> 1'
}

function myNameV1(name: string): string{
    return `Funcion V1: ${name}`
}

//Funcion tipo Flecha
const myNameV2 = (name2: string): string => {
return `Funcion V2: ${name2}`
}

let myNameV3 : (name3: string) => void  //Declaracion de una variable a tipo "Tipo Funcion"
myNameV3 = (name3) => {
    console.log(`Declaracion de una variable de "Tipo Funcion: ${name3}`)
}


const myNam0 = myName() //Llamando a la funcion myName()
console.log(myNam0)

const myNam1 = myNameV1(myStringVar) //Llamando a la funcion myNameV1()
console.log(myNam1)

const myNam2 = myNameV2(myStringVar)//Llamando a la funcion myNameV2()
console.log(myNam2)
myNameV3(myStringVar)

