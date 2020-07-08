"use strict";
//Vamos a modificar nuestra solución del ejercicio 2 para que,
//en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval.

let counter = 0;
let temp;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter + "🍇";

  if (counter > 11) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);
