"use strict";
//Array inicial
const lostNumbers = [4, 8, 15, 16, 23, 42];
// Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.
function arrayEvenNumbers(number) {
  return number % 2 === 0;
}
const evenNumbers = lostNumbers.filter(arrayEvenNumbers);
console.log(evenNumbers);

// Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
function arrayMultipleOfThree(number) {
  return number % 3 === 0;
}
const multipleOfThreeNumbers = lostNumbers.filter(arrayMultipleOfThree);
console.log(multipleOfThreeNumbers);

// Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
const result = evenNumbers.concat(multipleOfThreeNumbers);
console.log(result);
