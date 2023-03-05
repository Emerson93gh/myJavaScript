//console.log("Desde JS");

// funciones
function hello() {
  console.log("Hola desde JS");
}
hello(); //resultado: Hola desde JS

function sumar(x, y) {
  return x + y;
}
console.log(sumar(4, 5)); //resultado: 9

// parametros por defecto
function restar(x, y = 0) {
  return x - y;
}
console.log(restar(4)); //resultado: 4 + 0 = 4

// objetos - properties and methods
const user = {
    name: 'Armando',
    lastname: 'Solano',
    age: 19,
    address: {
        country: 'El Salvador',
        city: 'San Salvador'
    },
    friends: ['Maria', 'Francisco'],
    active: true,
    sendMail: function () {
        return "sending email...";
    }
}
console.log(user);
console.log(user.address);
console.log(user.active);
console.log(user.sendMail());

// shortand property names
const val1 = "pc";
const val2 = 2000;

const nuevoProducto = {
    //val1: val1,
    //val2: val2,
    val1,
    val2
}
console.log(nuevoProducto);

// Manipulacion del DOM
const title = document.createElement("h1");
title.innerText = 'JS';
const button = document.createElement("button");
button.innerText = 'Click';

// agragamos un evento de escucha al boton para realizar una accion al dar clic
button.addEventListener("click", function () {
  console.log("Dio click al boton!");
  title.innerText = 'JavaScript';
  alert('Texto del titulo actualizado');
})

// agregar elementos al cuerpo de html
document.body.append(title); 
document.body.append(button);

// Destructuring
// al trabajar con funciones podemos recibir objetos, y estos objetos tambien pueden ser utilizados dentro del DOM
const user2 = {
  name: 'Yomal',
  age: 30,
}

// function printInfo(user) {
//   return '<h1> Hola ' + user.name + ' </h1>';
// }
// Estructurando
// function printInfo({age}) {
//   return '<h1> hola ' + age + ' </h1>';
// }
// Otra Forma de Estructurar
function printInfo(user) {
  const { name, age } = user;

  return '<h1> User: ' + name + ' Age: ' + age + '</h1>'
}
console.log(printInfo(user2));

document.body.innerHTML = printInfo(user2);