//Type String
var myStringVar = "Cadena de texto";
console.log(myStringVar);
//Type Number
var myNumberVar = 1028;
console.log(myNumberVar);
//Type Boolean
var myBooleanVar = true;
console.log(myBooleanVar);
//Type Null
var myNullVar = null;
console.log(myNullVar);
//Type Undifined
var myUndefinedVar;
console.log(myUndefinedVar);
//_______________Funciones
function myName() {
    return 'Salida de la funcion -> 1';
}
function myNameV1(name) {
    return "Funcion V1: ".concat(name);
}
//Funcion tipo Flecha
var myNameV2 = function (name2) {
    return "Funcion V2: ".concat(name2);
};
var myNameV3; //Declaracion de una variable a tipo "Tipo Funcion"
myNameV3 = function (name3) {
    console.log("Declaracion de una variable de \"Tipo Funcion: ".concat(name3));
};
var myNam0 = myName(); //Llamando a la funcion myName()
console.log(myNam0);
var myNam1 = myNameV1(myStringVar); //Llamando a la funcion myNameV1()
console.log(myNam1);
var myNam2 = myNameV2(myStringVar); //Llamando a la funcion myNameV2()
console.log(myNam2);
myNameV3(myStringVar);
//---------------------"2da Parte - Clase 1"-----------------------------------------
//Array
var nameArray = []; //1era forma de declarar 
var nameArray2 = []; //2da forma de declarar 
//Object o Record
var myObject = {
    name: 'Pedro',
    edad: 23
};
var myRecord = {
    name: 'Pedro',
    edad: 23
};
myRecord.email = 'email.com';
myRecord.direccion = 'Av lAs ame';
// Tuplas
var miTupla = {}; //Las tuplas permite definir dos tipos de objetos
miTupla.name = 'Soy Tupla',
    miTupla.edad = 23;
console.log(miTupla);
