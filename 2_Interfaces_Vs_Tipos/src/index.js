//Implementando las interfaces y los Tipos
var ProductoFisico = /** @class */ (function () {
    function ProductoFisico() {
        this.price = 30;
        this.paymentMethod = "debito";
        this.nameClien = "John";
        this.productName = "Producto-1";
        this.clientAddress = "Avenida 2";
        this.quantity = 5;
    }
    return ProductoFisico;
}());
var ProductoVirtual = /** @class */ (function () {
    function ProductoVirtual() {
        this.price = 78;
        this.paymentMethod = 'credito';
        this.templateName = 'Folleto';
        this.format = 'pdf';
    }
    return ProductoVirtual;
}());
var productoFisico = new ProductoFisico();
console.log(productoFisico);
var productoVirtual = new ProductoVirtual();
console.log(productoVirtual);
