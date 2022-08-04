
setTimeout(()=> {
    const { value: email } = Swal.fire({
        title: 'Enterate de nuestras ofertas!',
        input: 'email',
        inputLabel: 'direccion de email',
        inputPlaceholder: 'Ingrese su email'
      })
      
      if (email) {
       
        Swal.fire(`Entered email: ${email}`);
        localStorage.setItem('email', `${email}`.value);
        //localStorage.getItem(`${email}`.value);
      }

}, 3000);




let carritoCompra;
const carritoEnStorage = JSON.parse(localStorage.getItem('carritoCompra'));

const miCard= document.getElementById("miCard");

const opcion= document.getElementById("selecTalles");

const carritoContenedor= document.getElementById("carrito-contenedor");

const carritoTerminar= document.getElementById("terminar");

const contadorCarrito= document.getElementById("contadorCarrito");
const precioTotal= document.getElementById("precioTotal");




//FUNCIONES
mostrarProductos();

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
        miCard.appendChild(divContenedor);

        let btnAgregar= document.getElementById(`boton${el.id}`);
        btnAgregar.addEventListener(`click`, ()=>{

           agregarAlCarrito(el.id)
           Toastify({
                text: "Producto en carrito!!",
                duration: 3000,
                style: {
                    background: "rgb(36, 46, 48)",
                  }
            }).showToast();
           
        })
    })

    
}

//FUNCION DE AGREGAR AL CARRITO
function agregarAlCarrito(id){
    const productoAgregar= productos.find(item=> item.id === id)//que item se fije si lo que recibe es el id por parametro
    carritoCompra.push(productoAgregar); 

    productoAgregar.stock>0 ? productoAgregar.stock-- : Swal.fire('Supero el maximo de este producto!'); 
    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra)); 
   
    carritoCantidad();        
    totalCarrito();
    mostrarCarrito();
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
    vaciarCarrito();
}

//VACIAR CARRITO
const vaciarCarrito= () => {
    const btnVaciar= document.getElementById('vaciarCarrito')
    btnVaciar.addEventListener('click', () =>{
        carritoCompra.length= [];

        carritoCantidad();
        mostrarCarrito();  
        totalCarrito();
    })
    
}

//FUNCION TOTAL DE COMPRA Y CUANTOS PRODUCTOS SE CARGARON EN EL ARRAY

const carritoCantidad=()=>{
    contadorCarrito.innerText = carritoCompra.length; 
}

function totalCarrito(){  
    precioTotal.innerText = carritoCompra.reduce((acc, el)=> acc + el.precio , 0);
}


const eliminar=(id)=>{
    const item= carritoCompra.find((el) => el.id === id);
    const indice = carritoCompra.indexOf(item);
    carritoCompra.splice(indice, 1);


    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));
    
    carritoCantidad();
    totalCarrito();
    mostrarCarrito();    
}

carritoEnStorage ? carritoCompra = carritoEnStorage : carritoCompra = [];

mostrarCarrito();
carritoCantidad();
totalCarrito(); 

//VALIDAR FORMULARIO EN STORAGE

const misDatos= [];

const datostEnStorage = () =>{
    
        const data= [];
        data.push(document.querySelector('#nombre').value);
        data.push(document.querySelector('#mail').value);
        data.push(document.querySelector('#tel').value);

        misDatos.push(data);
        const dataJson= JSON.stringify(misDatos);
        localStorage.setItem("data", dataJson);
}

const send= document.querySelector('#send');
send.addEventListener('click', (event) =>{
    event.preventDefault()
    datostEnStorage();
    Swal.fire({
        title: 'Por favor revise su email, alli enviamos su factura',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
})

























/*En resumen, quedaría así
array de objetos-->se transforma en Json-->se envía el json al storage-->se recupera el storage-->
se convierte el Json-->obtenemos los objetos nuevamente.



function botonVolverAtras(){
    const volver= document.createElement(`button`);
    volver.classList.add("boton-volver");
    volver.innerText= "Atras";
    volver.addEventListener("click", ()=> {
        mostrarProductos();
    })
}
*/