

//const modalContainer= document.getElementById('modalContenedor')

const modalContenedor= document.getElementById("modal-container");
const carritoAbrir= document.getElementById("carritoAbrir");
const carritoCerrar= document.getElementById("carritoCerrar");

carritoAbrir.addEventListener('click', () => {
    modalContenedor.classList.add ('modal-container--visible')
})

carritoCerrar.addEventListener('click', () => {
    modalContenedor.classList.remove ('modal-container--visible')
})
