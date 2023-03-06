const button = document.createElement("button");
button.innerText = "Click me";

const isAuthorized = true;

button.addEventListener("click", () => {
  if (isAuthorized) {
    return alert("Esta autorizado");
  }
  alert("No esta autorizado");
});

document.body.append(button);
