//ARRAY DE PRODUCTOS

const productos = [
    {id: 0, modelo: "Buzo AstroNasa", precio: 8000, stock: 3, img: "./assets/multimedia/buzo 1.jpeg"},
    {id: 1, modelo: "Buzo Astro", precio: 7500, stock: 3, img: "./assets/multimedia/buzo2.jpg"},
    {id: 2, modelo: "Buzo AstroIris", precio: 7500, stock: 3, img: "./assets/multimedia/buzo3.webp"},
    {id: 3, modelo: "Buzo NASA", precio: 8200, stock: 3, img: "./assets/multimedia/buzo4.jpg"},
    {id: 4, modelo: "Remera Space-X'", precio: 5600, stock: 3, img: "./assets/multimedia/reme1.jpg"},
    {id: 5, modelo: "Remera Space'", precio: 5500, stock: 3, img: "./assets/multimedia/reme2.jpg"},
    {id: 6, modelo: "Remera Nasa", precio: 4800, stock: 3, img: "./assets/multimedia/reme3.jpg"},
    {id: 7, modelo: "Remera Nasa Astro", precio: 4600, stock: 3, img: "./assets/multimedia/reme4.jpg"},
    {id: 8, modelo: "Remera Transborder", precio: 4500, stock: 3, img: "./assets/multimedia/reme.jpg"},
    {id: 9, modelo: "CamperNasa Denim Jacket", precio: 9500, stock: 3, img: "./assets/multimedia/nasa-denim-jacket-for-boys.jpg"},
    {id: 10, modelo: "Jean Space", precio: 8850, stock: 3, img: "./assets/multimedia/vaqueros-bordado-print-zodiaco-bershka-650x800.jpg"},
    
];

class Usuario{
    constructor(nombre, mail, telefono){
        this.nombre= nombre;
        this.mail= mail;
        this.telefono= telefono;
    }
}