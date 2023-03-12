// Async/await

// ejemplo 1: una promesa
// let data = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data); // devuelve una promesa

// ejemplo 2: mientras se ejecuta el fetch continua con la siguiente linea
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (){
//         console.log('Finalizo la carga de datos');
//     });
// console.log('Linea 2');
/* 
Resultado en consola:
Linea 2
Finalizo la carga de datos
*/

// Ejemplo 3: mostrar los datos obtenidos en el cuerpo del html
const ul = document.createElement('ul');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response){
//         return response.json(); // convertimos la respuesta en un valor comprensible
//     }).then(function (data) {
//         console.log(data);
//         data.forEach(function (post) {
//             const li = document.createElement('li');
//             li.innerText = post.title;
//             ul.append(li);
//         })
//         document.body.append(ul);
//     });

// otra forma mas sencilla
async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    data.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    })
    document.body.append(ul);
}
loadData();