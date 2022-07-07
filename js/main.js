//DESAFIO

let carritoCompra;//que inicie como var
const carritoEnStorage = JSON.parse(localStorage.getItem('carritoCompra'));

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
        const divContenedor = document.createElement("div");
        divContenedor.className = "card";
        //innerHTML=insertar html
        divContenedor.innerHTML= `<img src="${el.img}" class="card-img-top transition"  alt="${el.modelo}">
                                    <div class="card-body">
                                    <h5 class="card-title">${el.modelo}</h5>
                                    <p class="card-text">$ ${el.precio}</p>
                                    <p id="cantidad" class="card-text">Stock: disponible</p>
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
    const productoAgregar= productos.find(item=> item.id === id)//que item se fije si lo que recibe es el id por parametro
    carritoCompra.push(productoAgregar); 

    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));//cada vez que agrego un item, lo guarde en LS

     if(productoAgregar.stock >0){
        productoAgregar.stock--;
            
    }else{
        alert("Usted alcanzo el maximo de stock de este producto");        
    }
    
    mostrarCarrito();
    carritoCantidad();
    totalCarrito(); 
}

//FUNCION MODAL Y MOSTRAR
function mostrarCarrito(){
    carritoContenedor.innerHTML= "";

    carritoCompra.forEach((productoAgregar)=>{
        const div = document.createElement("div");
        div.className = "productoCarrito";
        div.innerHTML=`<p>${productoAgregar.modelo}</p>
                    <p>$ ${productoAgregar.precio}</p>
                    <button onclick="eliminar(${productoAgregar.id})" class="boton-eliminar"><i class="fas eliminar-alt">Eliminar</i></button>`
    
        carritoContenedor.appendChild(div);
    })
    
    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));
    
    carritoCantidad();
    totalCarrito();
}


//FUNCION TOTAL DE COMPRA Y CUANTOS PRODUCTOS SE CARGARON EN EL ARRAY

const carritoCantidad=()=>{
    //uso el innerText porque lo quiero es moidificar el valor, y no generar etiquetas
    contadorCarrito.innerText = carritoCompra.length; //que interprete en texto el largo del carrito, actializando el numero de los productos agregados
}

function totalCarrito(){
    
    precioTotal.innerText = carritoCompra.reduce((acc, el)=> acc + el.precio , 0);
}

/* reduce recibe dos param: una funcion y luego un numero x,
la funcion recibe el acumulador (acc) y un elem (el.precio) el acumulador se suma por cada elemento con propiedad precio
el 0 es el valor inicial del acumulador, sino cargo nada, no se acumula nada*/

const eliminar=(id)=>{
    const item= carritoCompra.find((el) => el.id === id);
    const indice = carritoCompra.indexOf(item);
    carritoCompra.splice(indice, 1);

    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));//si vacio mi carrito, actualizo mi local storage
    
    carritoCantidad();
    totalCarrito();
    mostrarCarrito();    
}

if(carritoEnStorage){
    carritoCompra = carritoEnStorage; //si encuentro info en el local storage

    mostrarCarrito();
    carritoCantidad();
    totalCarrito(); 
    //las funciones van leyendo lo que pasa en mi programa y van actualizando el dom con esa info 
}
else{
    carritoCompra = [];
}
//si el storage tiene un valor valido, el carrito va a ser igual al storage, sino
//recien ahi, mi carritoCompra inicia como array vacio










/*
 function eliminarDelCarrito(productoAgregar){
     let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`);
    
     btnEliminar.addEventListener('click', ()=> {
         btnEliminar.parentElement.remove();
         carritoCompra= carritoCompra.filter(elemento=> elemento.id !== productoAgregar.id);
         actualizarCarrito();
         //parent element me muestra al padre del elemento que tomo con id, y al hacer el remove, logro sacar al padre
         //del contenedor de ese producto, en este caso, quien contiene mi producto es productoCarrito
    })
    
}*/

//INPUTS

// const contacto= document.getElementById("contact");


//CARGAR FORMULARIO
// formulario();

// function formulario(){
//     let formContenedor = document.createElement("form");
//     formContenedor.className = "form";

//     //innerHTML=insertar html
//      formContenedor.innerHTML= ``;
//     miCard.appendChild(formContenedor);//hace padre a mi contenedor section y me genera todas las card de producto

  
// }



/*En resumen, quedaría así?
array de objetos-->se transforma en Json-->se envía el json al storage-->se recupera el storage-->
se convierte el Json-->obtenemos los objetos nuevamente.


console.log('Local Storage con JSON');

let items = [
    {id: 1, name: 'iPhone', price: 1200},
    {id: 2, name: 'Samsung', price: 1000},
    {id: 3, name: 'Xiaomi', price: 400}
]

console.log(items);

let itemsJSON = JSON.stringify(items)

localStorage.setItem('items', itemsJSON)

let itemsFromStorage = localStorage.getItem('items')
console.log(typeof itemsFromStorage);
console.log(itemsFromStorage);

let itemsBack = JSON.parse( itemsFromStorage )
console.log(itemsBack);



 */








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