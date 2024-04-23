//El generic se habitita con <> y dentro de los simbolos se indica el parametro
var example = {
    myVariable: true
};
console.log("Aqui es el valor del generic example: ".concat(example.myVariable));
//funcion con parametro generico <>
function myFunction(value) {
    console.log("El valor de la funcion es: ".concat(value));
}
myFunction(4);
//Funcion de flecha
var myFlecha = function (value) {
    console.log(" El valor de la flecha es:".concat(value));
};
myFlecha(true);
var MyType = {
    valor: "Muy Rico My type"
};
console.log(MyType);
