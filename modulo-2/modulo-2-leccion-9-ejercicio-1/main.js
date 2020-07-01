"use strict";

// Crear una función get100Numbers que devuelve un array con los números del 1 al 100

function get100Numbers(num) {
  //Creamos un array vacío para rellenarlo mediante el método push
  const numberList = [];
  // Usar un bucle y el método push para ir guardándolos
  for (let i = 1; i <= num; i++) {
    numberList.push(i);
  }
  return numberList;
}

// Comprobamos mediante la consola
console.log(get100Numbers(100));
