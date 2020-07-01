"use strict";

// Ahora mediante el método reverse() vamos a cambiar el orden de los números

function getReversed100Numbers(num) {
  //Creamos un array vacío para rellenarlo mediante el método push
  const numberList = [];
  // Usar un bucle y el método push para ir guardándolos
  for (let i = 1; i <= num; i++) {
    numberList.push(i);
  }
  return numberList;
}

// Comprobamos mediante la consola que al aplicarle el método reverse se invierte el orden de los números
console.log(getReversed100Numbers(100).reverse());
