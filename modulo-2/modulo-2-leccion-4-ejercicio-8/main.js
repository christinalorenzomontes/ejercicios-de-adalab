"use strict";

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"

//¿Por qué no se imprime en la consola 2 veces "x"?
//Porque primero loguea la variable que se encuentra fuera de la función y del otro modo (alterando el orden), primero loguea la función y luego el nuevo valor asignado a la variable dentro de la función.
