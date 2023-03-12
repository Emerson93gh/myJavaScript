// metodos de array
const names = ['Alex', 'Oscar', 'Melody'];

// recorrer un arreglo
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// }

// otra forma mas simple y mas utilizada en React
names.forEach(function (name) {
    console.log(name);
})

// recorrer y retornar un nuevo arreglo, sin modificar el origen
const newArray = names.map(function (name) {
    // return name;
    return `Hola ${name}`;
})
console.log(newArray);

// recorrer un arreglo y buscar un elemento
const nameFound = names.find(function (name) {
    if(name === 'Melody') {
        return name;
    }
})
console.log(nameFound);

// recorrer un arreglo y crea uno nuevo a partir de una condicion (utilizado para delete)
const newArray2 = names.filter(function (name) {
    if(name !== 'Alex'){
        return name;
    }
})
console.log(newArray2);

// concatenar dos arreglos
const newNames = ['Andrew', 'Michael', 'Clark'];

console.log(names.concat(newNames));