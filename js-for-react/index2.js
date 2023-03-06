// funciones anonimas

// function start() {
//     return 'starting...';
// }
//console.log(start());

// console.log(function start() {
//     return 'starting...';
// }());

console.log(function () {
    return 'starting...';
}());

const button = document.createElement("button");
button.innerText = "Click me";
button.addEventListener("click", function () {
    alert('Has dado click');
})

document.body.append(button);