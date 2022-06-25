//DESAFIO

let carritoCompra=[];



//const cards=document.getElementById("miCard");//section contenedor ppal


const miCard= document.getElementById("miCard");

const opcion= document.getElementById("selecTalles");

const carritoContenedor= document.getElementById("carrito-contenedor");

const carritoTerminar= document.getElementById("terminar");

const contadorCarrito= document.getElementById("contadorCarrito");
const precioTotal= document.getElementById("precioTotal");





//FUNCIONES
mostrarProductos();


//FUNCION GENERICA PARA GENERAR HTML(carrito, turnos, etc)
function mostrarProductos(){
    productos.forEach(el =>{
        let divContenedor = document.createElement("div");
        divContenedor.className = "card";

        //innerHTML=insertar html
        divContenedor.innerHTML= `<img src="${el.img}" class="card-img-top"  alt="${el.modelo}">
                                    <div class="card-body">
                                    <h5 class="card-title">${el.modelo}</h5>
                                    <p class="card-text">$ ${el.precio}</p>
                                    <a id="boton${el.id}" class="btn btn-primary">Comprar</a>
                                    </div>`;
        miCard.appendChild(divContenedor);//hace padre a mi contenedor section y me genera todas las card de productos

        let btnAgregar= document.getElementById(`boton${el.id}`);//almacena cada boton con su id
        
        //evento que se aplica a cada boton, uno por uno
        btnAgregar.addEventListener(`click`, ()=>{
           agregarAlCarrito(el.id)//puedo saber quien hizo click para agregar al carrito
        })
    })
}

//FUNCION DE AGREGAR AL CARRITO
function agregarAlCarrito(id){
    let productoAgregar= productos.find(item=> item.id === id)//que item se fije si lo que recibe es el id por parametro
    carritoCompra.push(productoAgregar);
    mostrarCarrito(productoAgregar);
    //console.log(productoAgregar);//logro encontrar el objeto que le pertenece a ese id
}

//FUNCION MODAL Y MOSTRAR
function mostrarCarrito(productoAgregar){
    let div = document.createElement("div");
    div.className = "productoCarrito";
    div.innerHTML=`<p>${productoAgregar.modelo}</p>
                    <p>$ ${productoAgregar.precio}</p>
                    <button class="boton-eliminar"><i class="fas eliminar-alt">Eliminar</i></button>`
    
    carritoContenedor.appendChild(div);

}


//FUNCION TOTAL DE COMPRA Y CUANTOS PRODUCTOS SE CARGARON EN EL ARRAY
function actualizarCarrito(){
    //uso el innerText porque lo quiero es moidificar el valor, y no generar etiquetas
    contadorCarrito.innerText = carritoCompra.length; //que interprete en texto el largo del carrito, actializando el numero de los productos agregados
    //precioTotal.innerText = carritoCompra.reduce((acc, el)=> acc + el.precio , 0)
}

/* reduce recibe dos param: una funcion y luego un numero x,
la funcion recibe el acumulador (acc) y un elem (el.precio) el acumulador se suma por cada elemento con propiedad precio
el 0 es el valor inicial del total, sino cargo nada, no se acumula nada*/



/*
function botonVolverAtras(){
    const volver= document.createElement(`button`);
    volver.classList.add("boton-volver");
    volver.innerText= "Atras";
    volver.addEventListener("click", ()=> {
        mostrarProductos();
    })
}
*/



























/*
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
*/

//miCarrito.algo, trabaja con las variables del objeto constructor
// const card1= document.getElementById("miCard");
// card1.cloneNode(true);