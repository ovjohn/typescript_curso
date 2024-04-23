type PaymentMethodType = 'debito' | 'credito' | 'efectivo';


//Aquì un Interface
interface IProductoBase {
    price: number;
    //paymentMethod: 'debito' | 'credito' | 'efectivo';//Agregando selector -> Que sea debito | credito | efectivo
    paymentMethod: 'debito' | 'credito' | 'efectivo';
    nameClien: string;
}

//Aquí un Tipo, esta se debe igualar " = "
type ProductoBaseType = {
    price: number;
    paymentMethod: 'debito' | 'credito' | 'efectivo';//Agregando selector -> Que sea debito | credito | efectivo    nameClien: string;
}


//HERENCIAS

//Herencia de tipo interface
interface IFisico extends IProductoBase {
    productName: string;
    clientAddress: string;
    quantity: number;
}

//Herencia de tipo Type
type VirtualType = ProductoBaseType & {  //Aqui esta heredando de ProductoBaseType + lo nuevo con -> "&"
    templateName: string;
    format: 'jpg' | 'npg' | 'pdf';
}


//Implementando las interfaces y los Tipos

class ProductoFisico implements IFisico{
    price: number = 30;
    paymentMethod: 'debito' | 'credito' | 'efectivo'= "debito";
    nameClien: string = "John";
    productName: string = "Producto-1";
    clientAddress: string = "Avenida 2";
    quantity: number = 5;
}

class ProductoVirtual implements VirtualType {
    price: number = 78;
    paymentMethod: 'debito' | 'credito' | 'efectivo'= 'credito';
    templateName: string = 'Folleto';
    format: 'jpg' | 'npg' | 'pdf' = 'pdf';
}

const productoFisico = new ProductoFisico()
console.log(productoFisico);
const productoVirtual = new ProductoVirtual()
console.log(productoVirtual);