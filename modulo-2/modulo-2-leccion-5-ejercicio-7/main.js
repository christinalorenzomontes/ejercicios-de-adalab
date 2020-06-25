"use strict";

// Creamos una variable haga referencia al botón llamando a su clase
let button = document.querySelector(".btn");

// Le añadimos al botón un llamador de 'click' que active a la una función que va a cambiar su estilo
button.addEventListener("click", function () {
  button.classList.toggle("btn-fancy");
});
