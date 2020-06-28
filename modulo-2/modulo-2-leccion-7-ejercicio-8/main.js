"use strict";

//Vamos a hacer uso de querySelectorAll para evitar repetir mucho código.
// Array que recoge a los tres botones
const buttons = document.querySelectorAll(".button");

// Función handler que cambia el fondo de los botones
function changeBackgroundButton(event) {
  event.currentTarget.classList.toggle("alert");
}

// Iteramos sobre todos los botones para añadirles a cada uno un event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBackgroundButton);
}
