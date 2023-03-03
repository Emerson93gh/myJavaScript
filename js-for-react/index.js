//console.log("Desde JS");

// funciones
function hello() {
  console.log("Hola desde JS");
}
hello();

function sumar(x, y) {
  return x + y;
}
console.log(sumar(4, 5));

// parametros por defecto
function restar(x, y = 0) {
  return x - y;
}
console.log(restar(4));

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

document.body.append(title);
document.body.append(button);