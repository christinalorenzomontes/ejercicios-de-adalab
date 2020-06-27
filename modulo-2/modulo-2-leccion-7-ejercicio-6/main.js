"use strict";
// SIN COMPLETAR
const button = document.querySelector(".js-button");
const film = document.querySelector(".movie");

// handler
function showMovie() {
  alert(`¡A mí también me encantaron ${film}.value!`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showMovie);
