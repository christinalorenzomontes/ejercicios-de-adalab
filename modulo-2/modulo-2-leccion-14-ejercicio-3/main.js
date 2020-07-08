"use strict";
//Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post.
//Por ejemplo, con el texto: "escrito hace 30 segundos".Al principio escribiremos en pantalla "escrito hace 1 segundo"
//e iremos aumentando el número de segundos.
//Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".

let counter = 0;

const incrementAndShowCounter = () => {
  if (counter < 1) {
    counter++;
    const time = document.querySelector(".time");
    time.innerHTML = "Escrito hace " + counter + " segundo.";
  } else if (counter < 60) {
    counter++;
    const time = document.querySelector(".time");
    time.innerHTML = "Escrito hace " + counter + " segundos.";
  } else {
    const time = document.querySelector(".time");
    time.innerHTML = "Escrito hace 1 minuto.";
  }
};

setInterval(incrementAndShowCounter, 1000);
