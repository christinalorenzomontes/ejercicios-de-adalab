// "use strict";
// //Parte 1
// // Listado de números
// const numbers = [6, 9, 8, 7, 6];

// // Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración. En esta variable iremos sumando cada una de las puntuaciones
// let acc = 0;

// for (let i = 0; i < numbers.length; i++) {
//   acc += numbers[i] / 5;
// }

// console.log("La media de nuestro listado es " + acc);

//Parte 2. Añadimos una nota más
// Listado de números
const numbers = [6, 9, 8, 7, 6];
// numbers[5] = 7;

// // Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración. En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i] / 6;
}

// console.log("La media de nuestro listado es " + acc);

//Parte 3. Creamos una función para encapsular los datos
function average() {
  return `¡La media es: ${numbers / 5}!`;
}
console.log(average());

//No se hacer esta parte, para preguntar el lunes.
