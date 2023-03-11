const backgroud = 'red';
const color = 'white';

const isAuthorized = false;

const button = document.createElement("button");
button.innerText = "Click me";
// string literals
button.style = `background: ${isAuthorized ? backgroud : 'blue'}; color: ${color};`;

button.addEventListener("click", () => {
  if (isAuthorized) {
    return alert("Esta autorizado");
  }
  alert("No esta autorizado");
});

document.body.append(button);
