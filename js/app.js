//fetch con archivo local
const url= 'json/data.json';


fetch(url)
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