//fetch con archivo local
// http://127.0.0.1:5500/json/data.json
const URL= 'json/data.json';

// function render(lista){
//     lista.forEach(e => {
//         document.write(`<li>${e.modelo} - precio ${e.precio}</li>`)
//     });
// }

fetch(URL)
    .then(resp => resp.json())
    .then(data => { console.log(data) })
    // .then(data => { render(data) })
    .catch(()=>{console.log("error al cargar archivo")})
    .finally(()=>{console.log("se dejo de ejecutar mi archivo json")});
    










// const cargarDatos = async () => {
//     const url = "../json/data.json";
//     const res = await fetch(url);
//     const datos = await res.json();
//     console.log(datos);
//   };
//   cargarDatos();

// fetch('./data.js')
//     .then((res) => {
//        res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })

    // fetch('https://pokeapi.co/api/v2/berry/2') 
    // .then((res) => {
    //    return res.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })