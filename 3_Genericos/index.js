//El generic se habitita con <> y dentro de los simbolos se indica el parametro
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var example = {
    myVariable: true
};
console.log("Aqui es el valor del generic example: ".concat(example.myVariable));
//funcion con parametro generico <>
function myFunction(value) {
    console.log("El valor de la funcion es: ".concat(value));
}
myFunction(4); // Llamando a la funcion
//Funcion de flecha
var myFlecha = function (value) {
    console.log(" El valor de la flecha es:".concat(value));
};
myFlecha(true);
var MyType = {
    valor: "Muy Rico My type"
};
console.log(MyType);
// Class o Clase
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = new value();
    }
    return GenericClass;
}());
var Ovj = /** @class */ (function () {
    function Ovj() {
        this.name = 'OJV';
        this.age = 45;
    }
    return Ovj;
}());
var Maria = /** @class */ (function () {
    function Maria() {
        this.nameMaria = 'OJV';
        this.ageMaria = 45;
    }
    return Maria;
}());
var Greet = /** @class */ (function (_super) {
    __extends(Greet, _super);
    function Greet() {
        return _super.call(this, Ovj) || this;
    }
    Greet.prototype.hello = function () {
        console.log("Hola, desde la clase Generrica, mi nema es: ".concat(this.value.name));
    };
    return Greet;
}(GenericClass));
new Greet().hello();
