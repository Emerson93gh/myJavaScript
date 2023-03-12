// Optional Chaining, usado al recibir datos desde backend
const person = {
    name: 'Joy',
    address: {
        city: 'London',
    },
    location: {}
}
// con un condicional
// if(person.location) {
//     console.log(person.location.city);
// }

// con el optional chaining, si es que existe
console.log(person.location?.city); // resultado undefined