// funciones anonimas

// function start() {
//     return 'starting...';
// }
//console.log(start());

// console.log(function start() {
//     return 'starting...';
// }());

console.log(
  (function () {
    return "starting...";
  })()
);

const button = document.createElement("button");
button.innerText = "Click me";
// button.addEventListener("click", function () {
//     alert('Has dado click');
// })
// document.body.append(button);

// arrow functions
// function add(x, y) {
//     return x + y;
// }

const add = (x, y) => {
  return x + y;
};
console.log(add(4, 2));

button.addEventListener("click", () => {
  alert("Has dado click");
});
document.body.append(button);

// inline arrow funtions
// const showText = () => {
//   return "Hola JS";
// };

const showText = () => "Hola JS";
const showNumber = () => 26;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
// para el caso de un objeto, con la sintaxis {} espera un return.
// para que trate el valor como un objeto usar () parentesis.
const showObject = () => ({ name: "Yomal" });

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());