//DESAFIO


class Compra{
    constructor(prenda, talle, cantidad, precio){
        this.prenda = prenda
        this.talle = talle
        this.cantidad = parseFloat(cantidad)
        this.precio = parseFloat(precio)
        this.disponible = true;
    }

    calcularCarrito(){
        return this.precio * this.cantidad;
    }
       
    vendido(){
        this.disponible=false;
    }
}


let carrito=[];
let respuesta;

alert("Bienvenido a su tienda!");

while(respuesta !== "no"){

    let prendas = prompt("seleccione su prenda que desea cargar: ");
    let talles = prompt("ingrese el talle: s, m, l, xl");
    let cantidad = Number(prompt("ingrese la cantidad de stock:"));
    let valor = Number(prompt("ingrese el precio de la prenda que desea publicar:"));
    

    carrito.push(new Compra(prendas, talles, cantidad, valor));

    if(prendas!=="" && talles!=="" && cantidad!==0 && valor!==0){

        alert("SUS PRODUCTOS FUERON CARGADOS CORRECTAMENTE!");
    }
    else{
        alert("ERROR! CARGUE CORRECTAMENTE EL PRODUCTO");
    }
    
    respuesta = prompt("desea seguir cargando productos?: si/no");
}


for(let miCarrito of carrito){
    alert("Usted cargo: " + "\n" + miCarrito.prenda + "\n" + "Talle: " +miCarrito.talle + "\n" + "Cantidad: " + miCarrito.cantidad + "\n" + "Precio: $" + miCarrito.precio);
}

alert("GRACIAS POR ELEGIRNOS!");

//miCarrito.algo, trabaja con las variables del objeto constructor





































































/*

 const Precio = (precio, cantidad) => {
     let total;
     return (total = precio * cantidad);
   };
  
  
let total=0;
let respuesta;
let compra=0;
const prendas= [];

  
while(respuesta!=="no"){
    let prenda = prompt("seleccione su prenda: pantalon $4500 remera $1800 buzo $3200");
    let cantidad = Number(prompt("seleccione la cantidad: "));

    prendas.push(prenda);

    if(prenda !== 0 && cantidad !== 0){
        for (let i = 0; i < 1 ; i++) {
          
            switch (prenda) {
                case "pantalon":
                total = Precio(4500, cantidad);
                alert("el total de su compra es: " + total);
                compra+=total;
                break;
                case "remera":
                total = Precio(1800, cantidad);
                alert("el total de su compra es: " + total);
                compra+=total;
                break;
                case "buzo":
                total = Precio(3200, cantidad);
                alert("el total de su compra es: " + total);
                compra+=total;
                break;
               }
               //compra += Precio(total, prenda);
            
        }
    }else{ 
        alert("Ingrese un producto para continuar");  
    }
      
       respuesta=prompt("desea seguir cargando productos?: si/no");
}
   
for(const miPrenda of prendas){
    alert("Usted selecciono: " + "\n" + miPrenda.prenda); 
}


alert("El total de su compra es: " + compra);






*/


















/*
const arrayDeNumeros= [1, 2, 3, 4,"hola"]
  
//    porCadaUno(numeros, console.log)



   const numerosDuplicados = []

   const funcionAnonima = (numero) => numerosDuplicados.push(numero * 2)


   //porCadaUno se convierte en el for que recorre numeros y hace por cada elemento el elemento * 2
   porCadaUno(arrayDeNumeros,funcionAnonima )
   /*
   let porCadaUno = (numeros, funcionAnonima)=> {
    
    for (const elemento of arr) {
        (elemento)=> duplicado.push(elemento * 2);
    }

  }
   
   
  console.log(numerosDuplicados)
  */




























/*let nombre = "Homero" ;
let apellido = "Simpson";
let edad = 38;


console.log("mi nombre es: " + nombre +" " + apellido + " " + edad);

const pais1= "francia";
const pais2= "India";
const pais3= "España";
const pais4= "Rusia";

console.log(pais1 + " " + pais2 + " " + pais3 + " " + pais4)
 

let fullname= " Bart Simpson";
let direccion = "742 evergreen terr";
let ciudad = "springfield, usa";
let birthday = "02-11-70";

let datos =  fullname + " " + direccion + " " + ciudad + " " + birthday ;
console.log (datos);

/*let integrante1= prompt("Ingrese integrante 1");
let integrante2= prompt("Ingrese integrante 2");
let integrante3= prompt("Ingrese integrante 3");
let integrante4= prompt("Ingrese integrante 4");

alert (integrante1 + integrante2 +integrante3 +integrante4 );

console.log (integrante1 + " " + integrante2 + " " + integrante3 +  " " + integrante4);


let precio = Number( prompt ("Ingrese precio"));
let descuento= precio * 0.2; 
let totalDescuento = "Total con Descuento 20%" + (precio - descuento);
alert(precio);
alert(totalDescuento);
console.log (totalDescuento);



let miNombre = prompt("Ingrese el nombre a comparar: ");
const elNombre = "Tefa";

if(miNombre === elNombre){
    alert("Fui Yo!!!!");
}else{
    alert("Yo no Fui!!!!");
} || 

let ingreso= prompt("Ingrese letra");
if(ingreso== "Y" )
{
    alert("Correcto");
} 
else {
    if ( ingreso== "y") {
        alert("error");
    } 
    else { alert("seguiintentando");
    } 
}


let ingreseNumero= prompt ("Ingrese un numero entre 1 y 4");
if (ingreseNumero =="1" || ingreseNumero== 1 ) {
    alert("Elegiste a Homero");
}else{
    if(ingreseNumero =="2" || ingreseNumero== 2 ) {
        alert("Elegiste a Marge");
    }
    else{ 
        if(ingreseNumero =="3" || ingreseNumero== 3) {
            alert("Elegiste a Bart");
        }
        else{
            if(ingreseNumero =="4" || ingreseNumero==4) {
                alert("Elegiste a Lisa");
            }
            else{
                alert("USTED SE ESTA EQUIVOCANDO, INGRESE NUMERO DEL 1 AL 4!!!");
            }
        }
    }
} 

let ingreseNumero=  Number(prompt ("Ingrese un numero entre 0 y 3000"));
if (ingreseNumero <=1000 ) {
    alert("BAJO");
}else{
    if(ingreseNumero <=3000) {
        alert("MEDIO");
    }
    else{ 
        if(ingreseNumero >=3001) {
            alert("ALTO");
        }
    }
}

let producto1= prompt("Ingrese el primer producto:");
let producto2= prompt("Ingrese el segundo producto:");
let producto3= prompt("Ingrese el tercer producto:");
let producto4= prompt("Ingrese el cuarto producto:");

if(producto1!="" && producto2!="" && producto3!="" && producto4!=""){
    alert("sus productos son: " + producto1 + " " 
                                + producto2 + " "
                                + producto3 + " "
                                + producto4);
}else{
    
    alert("ERROR, es necesario cargar todos los productos");
}

let cantidad = Number(prompt('INGRESAR CANTIDAD DE REPETICIONES'));
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto+index);
}

/*Solicitar al usuario un (1) un número y un (1) texto. Efectuar
 una salida por alerta con el mensaje ingresado por cada repetición, 
 hasta alcanzar el valor señalado por el usuario.*
let respuesta;

while(respuesta!="no"){
    let cantidad = Number(prompt('INGRESAR CANTIDAD DE REPETICIONES'));
    let texto = prompt('INGRESAR TEXTO A REPETIR');

    for(let i=0; i<cantidad; i++){
        console.log(texto+i);
    }
    
    respuesta= prompt('desea continuar?: si/no').toLowerCase();
}
*/

/*Solicitar al usuario un (1) un número. Emplear este valor para determinar
 la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje
  “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor 
  que cuatro (4), cancelar el ciclo. 

  let cantidad = Number(prompt('INGRESE UN NUMERO'));

  for(let i=0; i<cantidad; i++){
    
    if(cantidad>3){
        break;
    }
    alert(cantidad + " lado");
}
*/

/*Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados. 

let alumnos=3;
let alumno;

for(let i=0; i<alumnos; i++){
 alumno = prompt("ingrese el nombre del alumno/a: ");
    
}

alert("nombre: " + alumno);








let usuario=prompt("ingrese usuario:");
let clave=prompt("ingrese clave: ");

if(usuario.toUpperCase() === "FEDE" && clave === "1234"){
    console.log("USUARIO LOGUEADO");
}else{
    console.log("USUARIO INCORRECTO");
}

let precio;
let respuesta;
let cantidad=0;
let total=0;

while(respuesta!== "no"){

    let producto= Number(prompt("ingrese el producto: 1-zapatillas $3500 2-remera $1030 3-pantalon $5000 4-sweater $4750"));

    
        if(producto!= ""){
            switch(producto){
                case 1:
                    precio= 3500 - (3500*0.05);
                    console.log(" tu producto seleccionado es: zapatillas");
                    console.log("con el descuento del 5%, te salen: " + precio);
                    break;
    
                 case 2:
                    precio= 1030 - (1030*0.05);
                    console.log("tu producto seleccionado es: remera");
                    console.log("con el descuento del 5%, te salen: " + precio);
                    break;
                
                case 3:
                    precio= 5000 - (5000*0.15);
                    console.log( "tu producto seleccionado es: pantalon");
                    console.log("con el descuento del 15%, te salen: " + precio);
                    break;
    
                case 4:
                    precio= 4750 - (4750*0.2);
                    console.log(" tu producto seleccionado es: sweater");
                    console.log("con el descuento del 20%, te salen: " + precio);
                    break;
            }

            total+=precio;

        }else{
            alert("ingrese un producto valido para continuar");
        }
        
    

    respuesta=prompt("Desea aseguir cargando productos?: si/no");
}

console.log("El total de tu compra es:" + total);





let compras=20;
//let suma=0;
let prendas;
let seguir;
let i;
while(seguir!== "no"){
    
    prendas=prompt("ingrese la prenda que desea comprar: ");
    console.log("sus prendas seleccionadas son: " + prendas);

    for(i=0; i<compras.length; i++){
        
        if(i>=compras){
            alert("su carrito supero el num permitido");
        }else{
            if(prendas!==""){
                compras=prendas;
                compras+=i;
            }
            
        }
        
    }
    
    seguir=prompt("Desea aseguir cargando productos?: si/no");
}

console.log("usted cargo: " + compras + " productos");




//FUNCIONES


const descuentos = (precio, descuento) =>{ 
    return  precio - (precio*descuento)
}
*/


// const Precio = (precio, cantidad) => {
//     let total;
//     return (total = precio * cantidad);
// };


// function sumarCarrito(valor){
//     return (cantidad) => valor*cantidad;
//     //calcula el precio segun la cantidad
// }




// class Compra{
//     constructor(prenda, talle, cantidad, precio, total){
//         this.prenda = prenda
//         this.talle = talle
//         this.cantidad = parseFloat(cantidad)
//         this.precio = parseFloat(precio)
//         this.total = parseFloat(total);
//         this.disponible = true;
//     }

//     calcularCarrito(){
//         return this.precio * this.cantidad;
//     }
       
//     vendido(){
//         this.disponible=false;
//     }
// }


// let carrito=[];
// let respuesta;

// alert("Bienvenido a su tienda!");

// while(respuesta !== "no"){

//     let prendas = prompt("seleccione su prenda que desea cargar: pantalon $4500 remera $1800 buzo $3200");
//     let talles = prompt("ingrese el talle: s, m, l, xl");
//     let cantidad = Number(prompt("ingrese la cantidad:"));
//     let valor=0;
//     let total=0;

//     carrito.push(new Compra(prendas, talles, cantidad, valor, total));

//     if(prendas!=="" && talles!=="" && cantidad!==0){

//         for (let producto of carrito) {
//             switch (producto.prendas) {
//                 case "pantalon":
//                     producto.valor = 4500;
//                     producto.total= producto.calcularCarrito();
//                     producto.valor += producto.total;
//                     break;
//                 case "remera":
//                     producto.valor = 1800;
//                     producto.total=producto.calcularCarrito();
//                     producto.valor += producto.total;
//                     break;
//                 case "buzo":
//                     producto.valor = 3200;
//                     producto.total=producto.calcularCarrito();
//                     producto.valor += producto.total;
//                     break;
//             }
//             alert("El total cargado es: " + producto.total);
//         }
//     }
//     else{
//         alert("ERROR! CARGUE CORRECTAMENTE EL PRODUCTO");
//     }
    
   

//     respuesta = prompt("desea seguir cargando productos?: si/no");
// }



// for(let miCarrito of carrito){
//     alert("Usted cargo: " + "\n" + miCarrito.prendas + "\n" + "Talle: " +miCarrito.talle + "\n" + " Cantidad: " + miCarrito.cantidad);
// }
